import { Request, Response, Router } from 'express';
import AuthService from '../service/authService';

const routes = Router();

routes.post('/login', (req: Request, res: Response) => {
    const { email, senha } = req.body;

    AuthService.login(email, senha)
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
})

export default routes;