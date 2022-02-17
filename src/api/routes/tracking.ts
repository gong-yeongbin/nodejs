import { NextFunction, Router, Request, Response } from 'express';

const route: Router = Router();

export default (app: Router) => {
  app.use('/', route);

  route.get('/:token', async function (req: Request, res: Response, next: NextFunction) {
    return res.status(200).json('노에러');
  });
};
