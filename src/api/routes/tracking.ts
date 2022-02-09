import config from '../../config/index';
import { Router } from 'express';

let route: Router = Router();

export default (app: Router) => {
  app.use('/', route);

  route.get('/', async function (req, res, next) {
    res.send(`hello world!! [${config.env}]`);
  });
};
