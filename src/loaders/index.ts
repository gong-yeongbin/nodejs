import { Express } from 'express';
import expressLoader from './express';

export default async (app: Express) => {
  await expressLoader(app);
};
