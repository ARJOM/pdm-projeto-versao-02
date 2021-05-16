import { Request, Response, Router } from 'express';
import UserService from '../service/userService';
import UserInterface from '../interfaces/UserInterface';
import verifyJWT from '../utils/verifyAuth';

const routes = Router();

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

routes.get('/users/:id', (req: Request, res: Response) => {
    const id = req.params.id as unknown as number;
    UserService.getById(id)
        .then(result => {
            if (result !== null){
                res.json(result)
            } else {
                res.status(400).json({error: 'Parece que o id foi informado incorretamente, ou o recurso não existe'})
            }
        })
        .catch(err => res.status(500).json(err));
})

routes.put('/users/:id', verifyJWT, (req: Request, res: Response) => {
    const id = req.params.id as unknown as number;
    const user = req.body as UserInterface;
    UserService.update(id, user)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err))
})

routes.delete('/users/:id', verifyJWT, (req: Request, res: Response) => {
    const id = req.params.id as unknown as number;
    UserService.delete(id)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err))
})

export default routes;