import { createMedia, getMedia } from '@src/controllers/media';
import { Router } from 'express';

const route: Router = Router();

export default (app: Router) => {
  app.use('/media', route);

  route.post('/', createMedia);
  route.get('/', getMedia);
};
