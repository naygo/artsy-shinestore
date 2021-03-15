import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('orders')
class Order {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_id: number;

    @Column()
    product_id: number;

    @Column()
    quantity: number;

    @Column()
    status_id: number;

    @Column()
    date: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id)
            this.id = uuid();
    }

}

export { Order }