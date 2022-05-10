import express, { Request, Response } from 'express';
import { routes } from './routes/index';

const app = express();

app.get('/health-check', (req: Request, res: Response) => {
  res.send('Well done!');
});

app.get('/api', routes);

app.listen(3000, () => {
  console.log('The application is listening on port 3000!');
});
