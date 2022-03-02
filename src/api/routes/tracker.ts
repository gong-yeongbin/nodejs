import trackerService from '@src/services/tracker';
import { Router } from 'express';

const route: Router = Router();

export default (app: Router) => {
  app.use('/tracker', route);

  route.post('/', trackerService.create);
  route.get('/', trackerService.getAll);
};
