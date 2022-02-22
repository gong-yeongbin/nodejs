import { Router } from 'express';
import test from '@api/routes/test';
import tracking from '@api/routes/tracking';
import advertiser from '@api/routes/advertiser';

export default () => {
  const app: Router = Router();
  test(app);
  advertiser(app);
  tracking(app);
  return app;
};
