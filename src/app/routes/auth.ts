import { Router } from 'express';
import { signin, signup } from '../modules/auth/controllers/auth.controller';

const router = Router();

// Create Trainer User
router.post('/signin', signin);
// Get Trainer User
router.post('/signup', signup);

export default router;
