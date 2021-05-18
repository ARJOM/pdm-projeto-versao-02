import User from '../model/User';
import jwt from 'jsonwebtoken';
import passwordEncrypt from '../utils/passwordEncrypt';
import DotEnv from 'dotenv';

DotEnv.config()

const { SECRET } = process.env as any;

class AuthService{
    static async login(email: string, senha: string){
        const user = await User.findOne({where: {
            email,
            senha: passwordEncrypt(senha),
            isActive: true
        }});
        if (user !== null){
            const token = jwt.sign({id: user.id}, SECRET, {
                expiresIn: 3600000 // expira em 1 hora
            });
            return {auth: true, token: token, id: user.id};
        }
        throw new Error("Usuário com email e senha informados não existe")
    }

}

export default AuthService;