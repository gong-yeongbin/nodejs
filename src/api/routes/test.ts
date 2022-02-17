import { NextFunction, Request, Response, Router } from 'express';
import { get, set } from '@services/test';

const route: Router = Router();

export default (app: Router) => {
  app.use('/test', route);

  route.get('/set', async function (req: Request, res: Response, next: NextFunction) {
    res.status(200).json(await set());
  });

  route.get('/get', async function (req: Request, res: Response, next: NextFunction) {
    const status: string = await get();

    res.status(200).json(status);
  });
};
