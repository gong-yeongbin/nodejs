import { Router } from 'express';
import tracking from './routes/tracking';

export default () => {
  const app: Router = Router();
  tracking(app);
  return app;
};
