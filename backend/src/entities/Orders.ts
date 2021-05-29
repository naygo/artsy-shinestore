import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, CreateDateColumn, Generated, ManyToOne} from 'typeorm';
import { Products } from './Products';
import { Status } from './Status';
import { Users } from './Users';


@Entity()
export class Orders {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    quantity: number;

    @ManyToOne(() => Users, user => user.orders, {eager: true})
    user: Users;

    @ManyToOne(() => Products, product => product.orders, {eager: true})
    product: Products;

    @ManyToOne(() => Status, status => status.orders, {eager: true})
    status: Status;

    @Column()
    date: string;

    @CreateDateColumn()
    created_at: Date;
}