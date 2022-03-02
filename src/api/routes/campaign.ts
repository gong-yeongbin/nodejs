import campaginService from '@src/services/campaign';
import { Router } from 'express';

const route: Router = Router();

export default (app: Router) => {
  app.use('/campaign', route);

  route.post('/', campaginService.create);
  route.get('/', campaginService.getAll);
  route.get('/:token', campaginService.get);
};
