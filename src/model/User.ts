import { Table, Column, Model, Default, Unique, AllowNull } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
@Table
class User extends Model {
  @AllowNull(false)
  @Column(DataType.TEXT)
  nome!: string

  @Unique
  @AllowNull(false)
  @Column(DataType.TEXT)
  email!: string
  
  @AllowNull(false)
  @Column(DataType.TEXT)
  telefone!: string
  
  @AllowNull(false)
  @Column(DataType.TEXT)
  senha!: string
  
  @AllowNull(false)
  @Column(DataType.TEXT)
  cidade!: string
  
  @AllowNull(false)
  @Column(DataType.TEXT)
  bairro!: string
  
  @AllowNull(false)
  @Column(DataType.TEXT)
  rua!: string
  
  @AllowNull(true)
  @Column(DataType.TEXT)
  numero!: string | null
  
  @AllowNull(false)
  @Default(true)
  @Column(DataType.BOOLEAN)
  isActive!: boolean
}

export default User;