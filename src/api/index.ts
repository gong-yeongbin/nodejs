import { Router } from 'express';
import test from '@api/routes/test';
import tracking from '@api/routes/tracking';

export default () => {
  const app: Router = Router();
  tracking(app);
  test(app);
  return app;
};
