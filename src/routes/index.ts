import { Router } from 'express';
import UserRoutes from './userRoutes';
import RealEstateRoutes from './realEstateRoutes';
import AuthRoutes from './authRoutes';

const routes = Router();

routes.use(UserRoutes);
routes.use(RealEstateRoutes);
routes.use(AuthRoutes);

export default routes;