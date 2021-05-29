import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, CreateDateColumn, Generated} from 'typeorm';
import {Products} from './Products';

@Entity()
export class Categories {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    category: string;

    @OneToMany(() => Products, product => product.category)
    products: Products[];

    @CreateDateColumn()
    created_at: Date;
}