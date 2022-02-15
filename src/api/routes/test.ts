import { NextFunction, Request, Response, Router } from 'express';
import { getTest, setTest } from '../../services/tracking';

const route: Router = Router();

export default (app: Router) => {
  app.use('/', route);

  route.get('/setTest', async function (req: Request, res: Response, next: NextFunction) {
    res.status(200).json(await setTest());
  });

  route.get('/getTest', async function (req: Request, res: Response, next: NextFunction) {
    const status: string = await getTest();

    res.status(200).json(status);
  });

  route.get('/:token', async function (req: Request, res: Response, next: NextFunction) {});
};
