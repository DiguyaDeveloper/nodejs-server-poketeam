import { Router } from 'express';
import auth from './auth';
import trainer from './trainer';

const routes = Router();

routes.use('/trainer', trainer);
routes.use('/auth', auth);

export { routes };
