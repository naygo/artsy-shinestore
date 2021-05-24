import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('products')
class Product {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    value: number;

    @Column()
    description: string;

    @Column()
    img_link: string;

    @Column()
    category_id: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id)
            this.id = uuid();
    }
}

export { Product }