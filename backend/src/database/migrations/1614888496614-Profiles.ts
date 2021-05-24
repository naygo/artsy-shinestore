import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Profiles1614888496614 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'profiles',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    }
                    ,{
                        name: 'profile',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        );

        await queryRunner.manager.createQueryBuilder().insert()
            .into('profiles')
            .values([
                { id: 1, profile: 'Admin' },
                { id: 2, profile: 'Cliente' }
            ])
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('profiles');
    }
}
