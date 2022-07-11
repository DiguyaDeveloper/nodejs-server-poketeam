import { Router } from 'express';
import { signin, signup } from '../modules/auth/controllers/auth.controller';
import { validateSignup } from './../middlewares/validators';

const router = Router();

// Create Trainer User
router.post('/signin', signin);
// Get Trainer User
router.post('/signup', validateSignup, signup);
// Update Trainer by id
// router.put('/:id', putTrainer);

export default router;
