import { errors } from 'celebrate';
import express, { Request, Response } from 'express';
import routes from './app/routes';

const app = express();
app.use(express.json());

app.get('/health-check', (req: Request, res: Response) => {
  res.send('Well done!');
});

app.use('/api', routes);
app.use(errors());

// Refactor test
app.listen(3000, () => {
  console.log('The application is listening on port 3000!');
});
