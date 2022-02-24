import { Router } from 'express';
import tracking from '@api/routes/tracking';
import advertiser from '@api/routes/advertiser';
import tracker from '@api/routes/tracker';

export default () => {
  const app: Router = Router();
  advertiser(app);
  tracker(app);
  tracking(app);
  return app;
};
