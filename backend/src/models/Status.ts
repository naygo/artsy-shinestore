import { Table, HasMany, Column, Model, PrimaryKey, CreatedAt } from 'sequelize-typescript'
import Order from './Order';

@Table
class Status extends Model {
    
    @PrimaryKey
    @Column
    id: number

    @Column
    status: string;

    @HasMany(() => Order)
    orders: Order[]
    
    @CreatedAt
    created_at: Date;
}

export default Status;