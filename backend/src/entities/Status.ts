import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, CreateDateColumn, Generated, PrimaryColumn} from 'typeorm';
import { Orders } from './Orders';

@Entity()
export class Status {

    @PrimaryColumn()
    id: number;

    @Column()
    status: string;

    @OneToMany(() => Orders, order => order.status)
    orders: Orders[]

    @CreateDateColumn()
    created_at: Date;
}