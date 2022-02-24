import { Express } from 'express';
import expressLoader from '@src/loaders/express';
import mongooseLoader from '@src/loaders/mongoose';

export default async (app: Express) => {
  await mongooseLoader();
  console.log('✌️ MongoDB Connected');
  await expressLoader(app);
};
