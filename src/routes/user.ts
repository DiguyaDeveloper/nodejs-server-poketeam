import { Router } from 'express';
import {
  getUserById,
  getUsers,
  postUser,
  putUser
} from '../app/controllers/user.controller';

const router = Router();

// Get all users
router.get('', getUsers);
// Create user
router.post('', postUser);
// Get user by id
router.get('/:id', getUserById);
// Update user by id
router.put('/:id', putUser);

export default router;
