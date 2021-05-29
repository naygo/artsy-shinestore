import {getCustomRepository, MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";
import bcryptjs from 'bcryptjs';
import { v4 as uuid } from 'uuid';

import { config } from '../../config/config';
import { ProfileRepository } from "../../repositories/ProfileRepository";

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
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ]
            })
        );

        await queryRunner.addColumn('users', new TableColumn({
            name: 'profileId',
            type: 'int'
        }));

        await queryRunner.createForeignKey('users', new TableForeignKey({
            columnNames: ['profileId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'profiles',
            onDelete: 'CASCADE'
        }));

        await queryRunner.manager.createQueryBuilder().insert()
        .into('users')
        .values([
            { 
                id: uuid(), 
                name: 'Rayssa Karen', 
                email: 'rayssa@gmail.com', 
                password: await bcryptjs.hash(config.PASSWOR_ADMIN, 10),
                profile: await getCustomRepository(ProfileRepository).findOne(1)
            }
        ]).execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('users');
        const foreignKey:any = table?.foreignKeys.find(fk => fk.columnNames.indexOf('profileId') !== -1);
        await queryRunner.dropForeignKey('users', foreignKey);
        await queryRunner.dropColumn('users', 'profileId');
        await queryRunner.dropTable('users');
        await queryRunner.dropTable('profiles');
    }
}
