import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import DotEnv from 'dotenv';

DotEnv.config()

const { SECRET } = process.env as any;


export default function verifyJWT(req: Request, res: Response, next: NextFunction){
    const token = req.headers['authorization'];

    if (!token) return res.status(401).json({ auth: false, message: 'Token não enviado.' });

    jwt.verify(token.toString(), SECRET, function(err: any, decoded: any) {
        if (err) return res.status(500).json({ auth: false, message: 'Falha ao autenticar token.' });

        req.params.userId = decoded.id;
        next();
    })
}