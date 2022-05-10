import { Request, Response } from 'express';

export const getTrainerById = (req: Request, res: Response) => {
  res.send('Get Well done Trainer by id!');
};

export const putTrainer = (req: Request, res: Response) => {
  res.send('Put Well done Trainer by id!');
};

export const postTrainer = (req: Request, res: Response) => {
  res.send('Post Well done Trainer!');
};
