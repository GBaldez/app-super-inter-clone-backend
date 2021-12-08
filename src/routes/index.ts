import { Router } from 'express';
import  userRouter  from './users.routes'
import pixRouter from './pix.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/pix', pixRouter);
export default routes;