import { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from '../config/index';
import routes from '../api/index';

export default async (app: Express) => {
  config.env === 'development'
    ? app.use(morgan('dev'))
    : app.use(morgan('combined'));

  app.use(cors());
  app.use('/', routes());
  return app;
};
