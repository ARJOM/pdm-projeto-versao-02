import { Router } from 'express';
import UserRoutes from './userRoutes';
import RealEstateRoutes from './realEstateRoutes';

const routes = Router();

routes.use(UserRoutes);
routes.use(RealEstateRoutes);

export default routes;