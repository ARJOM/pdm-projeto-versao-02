import { Sequelize, Model, DataTypes } from 'sequelize';
import { db } from '../app';

class User extends Model{
    public id!: number;
    public nome!: string;
    public email!: string;
    public telefone!: string;
    public senha!: string;
    public cidade!: string;
    public bairro!: string;
    public rua!: string;
    public numero!: string | null;
    public isActive!: boolean;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: new DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: new DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: new DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: new DataTypes.STRING,
        allowNull: false,
    },
    cidade: {
        type: new DataTypes.STRING,
        allowNull: false,
    },
    bairro: {
        type: new DataTypes.STRING,
        allowNull: false,
    },
    rua: {
        type: new DataTypes.STRING,
        allowNull: false,
    },
    numero: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    tableName: "usuarios",
    sequelize: db
  }
);