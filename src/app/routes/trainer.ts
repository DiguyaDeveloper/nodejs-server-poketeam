import { Router } from 'express';
import {
  getTrainerById,
  getTrainers
} from '../modules/trainer/controllers/trainer.controller';

const router = Router();

// Get all users
router.get('', getTrainers);
// Get Trainer by id
router.get('/:id', getTrainerById);

export default router;
