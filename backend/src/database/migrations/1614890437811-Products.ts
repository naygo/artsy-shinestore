import {MigrationInterface, QueryRunner, Table} from "typeorm";

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
                        type: 'double'
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
                        name: 'category_id',
                        type: 'integer',
                        isNullable: true
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKCategory',
                        referencedTableName: 'categories',
                        referencedColumnNames: ['id'],
                        columnNames: ['category_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }

}
