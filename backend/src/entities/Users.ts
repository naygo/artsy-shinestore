import {Entity, PrimaryGeneratedColumn, QueryRunner, Column, ManyToMany, OneToMany, ManyToOne, CreateDateColumn, Generated, QueryBuilder, InsertQueryBuilder, EntityManager, JoinTable, JoinColumn} from 'typeorm';
import { Orders } from './Orders';
import { Profiles } from './Profiles';

@Entity()
export class Users {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
    
    @ManyToOne(() => Profiles, profile => profile.users, {eager: true})
    profile: Profiles

    @OneToMany(() => Orders, order => order.user)
    orders: Orders[];    
    
    @CreateDateColumn()
    created_at: Date;
}