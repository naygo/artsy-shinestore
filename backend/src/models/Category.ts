import { Table, Column, Model, PrimaryKey, IsUUID, HasMany, CreatedAt, DataType, Default } from 'sequelize-typescript'
import Product from './Product';

@Table
export class Category extends Model {
    @PrimaryKey
    @Column
    id: number;

    @Column
    category: string;

    @CreatedAt
    created_at: Date;

    @HasMany(() => Product)
    product: Product[]
}

export default Category;