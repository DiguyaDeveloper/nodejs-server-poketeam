import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
  res.send('Get Well done User!');
};

export const getUserById = (req: Request, res: Response) => {
  res.send('Get Well done User by id!');
};

export const putUser = (req: Request, res: Response) => {
  res.send('Put Well done User by id!');
};

export const postUser = (req: Request, res: Response) => {
  res.send('Post Well done User!');
};
