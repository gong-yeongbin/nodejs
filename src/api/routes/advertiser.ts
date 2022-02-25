import { Router } from 'express';
import advertiserService from '@src/services/advertiser';

const route: Router = Router();

export default (app: Router) => {
  app.use('/advertiser', route);

  route.post('/', advertiserService.create);
  route.get('/', advertiserService.get);
};
