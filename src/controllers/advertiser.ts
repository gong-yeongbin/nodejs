import * as advertiserSevice from '@src/services/advertiser';
import { Request, Response } from 'express';

export const createAdvertiser = async (req: Request, res: Response) => {
  await advertiserSevice.setAdvertiser(req, res);
};

export const getAdvertiser = async (res: Response) => {
  res.status(200).json(await advertiserSevice.getAdvertiser());
};
