import { Router } from 'express';
import tracking from '@src/api/routes/tracking';
import advertiser from '@src/api/routes/advertiser';
import tracker from '@src/api/routes/tracker';
import media from '@src/api/routes/media';
import advertising from '@src/api/routes/advertising';

export default () => {
  const app: Router = Router();
  advertising(app);
  advertiser(app);
  tracker(app);
  media(app);
  tracking(app);
  return app;
};
