import mediaService from '@src/services/media';
import { Router } from 'express';

const route: Router = Router();

export default (app: Router) => {
  app.use('/media', route);

  route.post('/', mediaService.create);
  route.get('/', mediaService.getAll);
};
