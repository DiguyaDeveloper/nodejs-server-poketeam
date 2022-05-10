import { Request, Response } from 'express';
import { Trainer } from '../../core/interfaces/trainer.interface';

export const getTrainers = (req: Request, res: Response) => {
  res.send('Get Well done Trainer!');
};

export const getTrainerById = (req: Request, res: Response) => {
  const trainer: Trainer = {
    nickname: 'Diguya',
    email: 'diguya@poketeam.com'
  };
  res.send(trainer);
};

export const putTrainer = (req: Request, res: Response) => {
  res.send('Put Well done Trainer by id!');
};

export const postTrainer = (req: Request, res: Response) => {
  res.send('Post Well done Trainer!');
};
