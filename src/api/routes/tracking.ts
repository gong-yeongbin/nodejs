import { NextFunction, Request, Response, Router } from 'express';
import { TrackingService } from '../../services/tracking';
import userModel from '../../models/User';

const route: Router = Router();

export default (app: Router) => {
  app.use('/', route);

  route.get('/', async function (req: Request, res: Response, next: NextFunction) {
    const trackingServiceInstance: TrackingService = new TrackingService({ userModel });
    const status: string = await trackingServiceInstance.status();

    res.status(200).json(status);
  });

  route.get('/:token', async function (req: Request, res: Response, next: NextFunction) {});
};
