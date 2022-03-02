import advertisingService from '@src/services/advertising';
import { Router } from 'express';

const route: Router = Router();

export default (app: Router) => {
  app.use('/advertising', route);

  route.post('/', advertisingService.create);
  route.get('/', advertisingService.getAll);
};
