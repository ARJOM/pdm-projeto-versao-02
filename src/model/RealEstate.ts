import { Table, Column, Model, Default, AllowNull, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import User from './User';

@Table
class RealEstate extends Model {
  @AllowNull(false)
  @Column(DataType.NUMBER)
  preco!: number
  
  @AllowNull(false)
  @Column(DataType.TEXT)
  descricao!: string

  @AllowNull(false)
  @Column(DataType.TEXT)
  imagens!: string

  @AllowNull(false)
  @Column(DataType.NUMBER)
  metrosQuadrados!: number

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

  @ForeignKey(() => User)
  @Column(DataType.NUMBER)
  userId!: number

  @BelongsTo(() => User)
  user!: User
}

export default RealEstate;