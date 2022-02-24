import Advertiser from '@src/models/Advertiser';
import { Request, Response } from 'express';

export const setAdvertiser = async (req: Request, res: Response): Promise<void> => {
  const advertiserInstance = new Advertiser();
  advertiserInstance.name = req.body.name;

  advertiserInstance.save((_, result) => {
    if (result) {
      res.status(200).send('success');
    } else {
      res.status(409).send('duplicate advertiser name');
    }
  });
};

export const getAdvertiser = async () => {
  return await Advertiser.find();
};
