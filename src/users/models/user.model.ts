import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserAttr {
  username: string;
  hashed_password: string;
  email: string;
  is_owner: boolean;
  is_active: boolean;
  hashed_refresh_token: string;
  activation_link: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  username: string;

  @Column({ type: DataType.STRING, allowNull: false })
  hashed_password: string;

  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  is_owner: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  is_active: boolean;

  @Column({ type: DataType.STRING })
  hashed_refresh_token: string;

  @Column({ type: DataType.STRING })
  activation_link: string;
}
