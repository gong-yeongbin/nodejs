import Advertiser from '@models/Advertiser';
import { Request, Response } from 'express';

const setAdvertiser = async (req: Request, res: Response): Promise<any> => {
  const advertiser = new Advertiser();
  advertiser.name = req.body.name;

  advertiser.save((error, result) => {
    if (result) {
      res.status(200).send('');
    } else {
      res.status(409).send('duplicate advertiser');
    }
  });
};

const getAdvertiser = async () => {
  return await Advertiser.find();
};

export { setAdvertiser, getAdvertiser };
