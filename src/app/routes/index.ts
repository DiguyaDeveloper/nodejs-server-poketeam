import { Router } from 'express';
import auth from './auth';
import trainer from './trainer';

const routes = Router();

routes.use('/trainers', trainer);
routes.use('/auth', auth);

export default routes;
