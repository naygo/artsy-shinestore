import {MigrationInterface, QueryRunner, Table} from "typeorm";
import bcryptjs from 'bcryptjs';
import { v4 as uuid } from 'uuid';

import { config } from '../../config/config';

export class Users1614889595872 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'email',
                        type: 'varchar'
                    },
                    {
                        name: 'password',
                        type: 'varchar'
                    },
                    {
                        name: 'profile_id',
                        type: 'number'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKProfile',
                        referencedTableName: 'profiles',
                        referencedColumnNames: ['id'],
                        columnNames: ['profile_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        );

        await queryRunner.manager.createQueryBuilder().insert()
        .into('users')
        .values([
            { 
                id: uuid(), 
                name: 'Rayssa Karen', 
                email: 'rayssa@gmail.com', 
                password: await bcryptjs.hash(config.PASSWOR_ADMIN, 10),
                profile_id: 1
            }
        ]).execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
