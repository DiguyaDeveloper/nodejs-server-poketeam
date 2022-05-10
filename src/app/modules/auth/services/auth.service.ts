import { Request, Response } from 'express';
import { TrainerRepository } from '../../trainer/repository/trainer.repository';

export const signin = async (req: Request): Promise<{ token: string }> => {
  const { email, password } = req.body;
  const signinTrainer = await TrainerRepository.findOne({ email, password });
  return signinTrainer;
};

export const signup = (req: Request, res: Response) => {
  res.send('Signup Well done!');
};
