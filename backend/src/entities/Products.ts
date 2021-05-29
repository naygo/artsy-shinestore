import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, ManyToOne, CreateDateColumn} from 'typeorm';
import { Categories } from './Categories';
import { Orders } from './Orders';

@Entity()
export class Products {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string;

    @Column()
    value: number;

    @Column()
    description: string;

    @Column('blob')
    img_link: string;
    
    @ManyToOne(() => Categories, category => category.products, {eager: true})
    category: Categories;

    @OneToMany(() => Orders, order => order.product)
    orders: Orders[]

    @CreateDateColumn()
    created_at: Date;

}