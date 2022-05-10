import { Router } from 'express';
import {
  getTrainerById,
  postTrainer,
  putTrainer
} from '../modules/auth/controllers/auth.controller';

const router = Router();

// Create Trainer
router.post('', postTrainer);
// Get Trainer by id
router.get('/:id', getTrainerById);
// Update Trainer by id
router.put('/:id', putTrainer);

export default router;
