import { Table, Column, Model, PrimaryKey, IsUUID, CreatedAt, Default, DataType } from 'sequelize-typescript'

@Table
class Order extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column
    id: string

    @Column
    user_id: number;

    @Column
    product_id: number;

    @Column
    quantity: number;

    @Column
    status_id: number;

    @Column
    date: string;

    @CreatedAt
    created_at: Date;
}

export default Order;