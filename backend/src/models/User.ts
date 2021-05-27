import { Table, Column, Model, PrimaryKey, IsUUID, CreatedAt, Default, DataType, IsEmail, ForeignKey, BelongsTo } from 'sequelize-typescript'
import Profile from './Profile';

@Table
class User extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column
    id: string

    @Column
    name: string;

    @IsEmail
    @Column
    email: string;

    @Column
    description: string;

    @Column
    password: string;

    @ForeignKey(() => Profile)
    @Column
    profile_id: number

    @BelongsTo(() => Profile)
    profile: Profile

    @CreatedAt
    created_at: Date;
}

export default User;