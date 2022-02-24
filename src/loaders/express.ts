import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from '@src/config/index';
import routes from '@src/api/index';

export default async (app: Express) => {
  config.env === 'DEVELOPMENT' ? app.use(morgan('dev')) : app.use(morgan('combined'));

  app.use(cors());
  app.use(express.json());
  app.use('/', routes());
  return app;
};
