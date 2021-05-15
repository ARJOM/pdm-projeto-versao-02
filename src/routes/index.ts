import { Router } from 'express';
import UserRoutes from './userRoutes';

const routes = Router();

routes.use(UserRoutes);

export default routes;