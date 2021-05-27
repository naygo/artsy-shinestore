import { Table, Column, Model, PrimaryKey, IsUUID, CreatedAt, Default, DataType, HasOne, ForeignKey } from 'sequelize-typescript'
import Category from './Category';

@Table
export class Product extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column
    id: string

    @Column
    name: string;

    @Column
    value: number;

    @Column
    description: string;

    @Column(DataType.BLOB)
    img_link: number;

    @ForeignKey(() => Category)
    @Column
    profile_id: number

    @HasOne(() => Category)
    category: Category;

    @CreatedAt
    created_at: Date;
}

export default Product;