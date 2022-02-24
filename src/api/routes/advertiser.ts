import { NextFunction, Request, Response, Router } from 'express';
import { createAdvertiser, getAdvertiser } from '@controllers/advertiser';

const route: Router = Router();

export default (app: Router) => {
  app.use('/advertiser', route);

  route.post('/', createAdvertiser);
  route.get('/', getAdvertiser);
};
