import { NextFunction, Request, Response, Router } from 'express';
import { setAdvertiser, getAdvertiser } from '@services/advertiser';

const route: Router = Router();

export default (app: Router) => {
  app.use('/advertiser', route);

  route.post('/', async function (req: Request, res: Response, next: NextFunction) {
    await setAdvertiser(req, res);
  });

  route.get('/', async function (req: Request, res: Response, next: NextFunction) {
    res.status(200).json(await getAdvertiser());
  });
};
