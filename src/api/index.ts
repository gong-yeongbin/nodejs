import { Router } from 'express';
import test from '@api/routes/test';

export default () => {
  const app: Router = Router();
  test(app);
  return app;
};
