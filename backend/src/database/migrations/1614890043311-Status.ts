import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Status1614890043311 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'status',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true
                    }, 
                    {
                        name: 'status',
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

        await queryRunner.manager.createQueryBuilder().insert()
        .into('status')
        .values([
            { id: 1, status: 'Cancelada' },
            { id: 2, status: 'Iniciado' },
            { id: 3, status: 'Concluída' }
        ]).execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('status');
    }
}
