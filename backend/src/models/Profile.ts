import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity('profiles')
class Profile {

    @PrimaryColumn()
    readonly id: number;

    @Column()
    profile: string;

    @CreateDateColumn()
    created_at: Date;
}

export { Profile }