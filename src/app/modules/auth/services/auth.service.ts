import { Request, Response } from 'express';

export const signin = (req: Request, res: Response) => {
  res.send('Signin Well done!');
};

export const signup = (req: Request, res: Response) => {
  res.send('Signup Well done!');
};
