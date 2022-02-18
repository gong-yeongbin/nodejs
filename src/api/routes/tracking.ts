import { NextFunction, Router, Request, Response } from 'express';
import { oneOf, query, Result, validationResult } from 'express-validator';

const route: Router = Router();

const validateReq = [
  // param('token').isUUID(4),
  query('clickId').notEmpty(),
  query('pubId').notEmpty(),
  query('subId').optional(),
  oneOf([query('idfa').exists({ checkFalsy: true }), query('adid').exists({ checkFalsy: true })]),
  query('sub1').optional(),
  query('sub2').optional(),
  query('sub3').optional(),
  query('sub4').optional(),
  query('sub5').optional(),
];

const result = (req: Request, res: Response, next: NextFunction) => {
  const errors: Result = validationResult(req);
  if (!errors.isEmpty()) res.status(400).send(errors);
  next();
};

export default (app: Router) => {
  app.use('/', route);

  route.get(
    '/:token',
    validateReq,
    result,
    async function (req: Request, res: Response, next: NextFunction) {
      return res.status(200).json('');
    }
  );
};
