import { Router } from 'express';
import {
  getTrainerById,
  getTrainers,
  postTrainer,
  putTrainer
} from '../modules/trainer/controllers/trainer.controller';

const router = Router();

// Get all users
router.get('', getTrainers);
// Create Trainer
router.post('', postTrainer);
// Get Trainer by id
router.get('/:id', getTrainerById);
// Update Trainer by id
router.put('/:id', putTrainer);

export default router;
