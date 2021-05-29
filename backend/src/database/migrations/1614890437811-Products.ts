import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class Products1614890437811 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
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
                        name: 'value',
                        type: 'number'
                    },
                    {
                        name: 'description',
                        type: 'varchar'
                    },
                    {
                        name: 'img_link',
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

        await queryRunner.addColumn('products', new TableColumn({
            name: 'categoryId',
            type: 'uuid'
        }));

        await queryRunner.createForeignKey('products', new TableForeignKey({
            columnNames: ['categoryId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categories',
            onDelete: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('products');
        const foreignKey:any = table?.foreignKeys.find(fk => fk.columnNames.indexOf('categoryId') !== -1);
        await queryRunner.dropForeignKey('products', foreignKey);
        await queryRunner.dropColumn('products', 'categoryId');
        await queryRunner.dropTable('products');
        await queryRunner.dropTable('categories');    
    }

}
