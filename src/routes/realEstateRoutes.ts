import { Request, Response, Router } from 'express';
import RealEstateService from '../service/realEstateService';
import RealEstateInterface from '../interfaces/RealEstateInterface';
import verifyJWT from '../utils/verifyAuth';
import RealEstateQueryInterface from '../interfaces/RealEstateQueryInterface';

const routes = Router();

routes.post('/real-estate', verifyJWT, (req: Request, res: Response) => {
    const id = req.params.userId as unknown as number;
    const realEstate = req.body as RealEstateInterface;
    realEstate.userId = id
    RealEstateService.save(realEstate)
        .then(result => res.status(201).json(result))
        .catch(err => res.status(400).json(err));
})

routes.get('/real-estate', (req: Request, res: Response) => {
    const queryParams = req.query as unknown as RealEstateQueryInterface;
    RealEstateService.list(queryParams)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
})

routes.get('/real-estate/user', verifyJWT, (req: Request, res: Response) => {
    const id = req.params.userId as unknown as number;
    RealEstateService.findByUser(id)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
})

routes.get('/real-estate/:id', (req: Request, res: Response) => {
    const id = req.params.id as unknown as number;
    RealEstateService.getById(id)
        .then(result => {
            if (result !== null){
                res.json(result)
            } else {
                res.status(400).json({error: 'Parece que o id foi informado incorretamente, ou o recurso não existe'})
            }
        })
        .catch(err => res.status(500).json(err));
})

routes.put('/real-estate/:id', verifyJWT, (req: Request, res: Response) => {
    const id = req.params.id as unknown as number;
    const realEstate = req.body as RealEstateInterface;
    RealEstateService.update(id, realEstate)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err))
})

routes.delete('/real-estate/:id', verifyJWT, (req: Request, res: Response) => {
    const id = req.params.id as unknown as number;
    RealEstateService.delete(id)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err))
})

export default routes;