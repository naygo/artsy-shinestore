import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Orders1614892490080 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'orders',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'user_id',
                        type: 'integer'
                    },
                    {
                        name: 'product_id',
                        type: 'integer'
                    },
                    {
                        name: 'quantity',
                        type: 'integer'
                    },
                    {
                        name: 'status_id',
                        type: 'integer',
                        isNullable: true
                    },
                    {
                        name: 'date',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKUser',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKProduct',
                        referencedTableName: 'products',
                        referencedColumnNames: ['id'],
                        columnNames: ['product_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKStatus',
                        referencedTableName: 'status',
                        referencedColumnNames: ['id'],
                        columnNames: ['status_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders');
    }

}
