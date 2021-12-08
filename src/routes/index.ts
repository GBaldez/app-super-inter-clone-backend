import { Router } from 'express';
import  userRoute  from './users.routes'

const routes = Router();

routes.use('/users', userRoute);
module.exports = routes;