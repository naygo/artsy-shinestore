import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

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
                        name: 'quantity',
                        type: 'integer'
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
                ]
            })
        );

        await queryRunner.addColumn('orders', new TableColumn({
            name: 'userId',
            type: 'uuid'
        }));

        await queryRunner.createForeignKey('orders', new TableForeignKey({
            columnNames: ['userId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE'
        }));

        await queryRunner.addColumn('orders', new TableColumn({
            name: 'productId',
            type: 'uuid'
        }));

        await queryRunner.createForeignKey('orders', new TableForeignKey({
            columnNames: ['productId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'products',
            onDelete: 'CASCADE'
        }));

        await queryRunner.addColumn('orders', new TableColumn({
            name: 'statusId',
            type: 'int'
        }));

        await queryRunner.createForeignKey('orders', new TableForeignKey({
            columnNames: ['statusId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'status',
            onDelete: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('orders');
        const foreignKey:any = table?.foreignKeys.find(fk => fk.columnNames.indexOf('statusId') !== -1);
        await queryRunner.dropForeignKey('orders', foreignKey);
        await queryRunner.dropColumn('orders', 'statusId');
        await queryRunner.dropTable('orders');
        await queryRunner.dropTable('status');    
    }

}
