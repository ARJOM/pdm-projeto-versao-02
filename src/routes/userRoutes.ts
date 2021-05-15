import { Request, Response, Router } from 'express';
import UserService from '../service/userService';
import UserInterface from '../interfaces/UserInterface';

const routes = Router();

// preencher com rotas adicionadas
routes.post('/users', (req: Request, res: Response) => {
    const user = req.body as UserInterface;
    UserService.save(user)
        .then(result => res.status(201).json(result))
        .catch(err => res.status(400).json(err));
})

routes.get('/users', (req: Request, res: Response) => {
    UserService.list()
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
})
export default routes;