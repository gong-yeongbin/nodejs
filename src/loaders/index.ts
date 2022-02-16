import { Express } from 'express';
import expressLoader from '@loaders/express';
import mongooseLoader from '@loaders/mongoose';

export default async (app: Express) => {
  await mongooseLoader();
  console.log('✌️ MongoDB Connected');
  await expressLoader(app);
};
