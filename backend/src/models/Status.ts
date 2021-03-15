import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity('status')
class Status {

    @PrimaryColumn()
    readonly id: number;

    @Column()
    status: string;

    @CreateDateColumn()
    created_at: Date;
}

export { Status }