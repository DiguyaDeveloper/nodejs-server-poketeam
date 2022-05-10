import { Router } from 'express';
import trainer from './trainer';

const routes = Router();

routes.use('/trainer', trainer);

export { routes };
