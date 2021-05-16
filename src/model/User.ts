import { Table, Column, Model, Default, Unique, AllowNull, HasMany } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import RealEstate from './RealEstate';
import passwordEncrypt from '../utils/passwordEncrypt';
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
  get senha(): string {
    return this.getDataValue('senha')
  }

  set senha(value: string) {
    this.setDataValue('senha', passwordEncrypt(value))
  }
  
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

  @HasMany(() => RealEstate)
  realEstate!: RealEstate[]
}

export default User;