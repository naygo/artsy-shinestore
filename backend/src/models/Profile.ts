import { Table, HasMany, Column, Model, PrimaryKey, IsUUID, CreatedAt, Default, DataType, HasOne, ForeignKey } from 'sequelize-typescript'
import User from './User';

@Table
class Profile extends Model {
    
    @PrimaryKey
    @Column
    id: number

    @Column
    profile: string;

    @HasMany(() => User)
    users: User[]
    
    @CreatedAt
    created_at: Date;
}

export default Profile;