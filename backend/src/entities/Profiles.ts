import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, CreateDateColumn, Generated, PrimaryColumn} from 'typeorm';
import { Users } from './Users';

@Entity()
export class Profiles {

    @PrimaryColumn()
    id: number;

    @Column()
    profile: string;

    @OneToMany(() => Users, user => user.profile)
    users: Users[]

    @CreateDateColumn()
    created_at: Date;
}