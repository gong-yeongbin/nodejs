import { NextFunction, Request, Response, Router } from 'express';
import { getTracker, createTracker } from '../../controllers/tracker';

const route: Router = Router();

export default (app: Router) => {
  app.use('/tracker', route);

  route.post('/', createTracker);
  route.get('/', getTracker);
};
