import Advertiser from '@src/models/Advertiser';
import { Request, Response } from 'express';

const advertiserService = {
  create: async (req: Request, res: Response) => {
    const advertiserInstance = new Advertiser();
    advertiserInstance.name = req.body.name;

    advertiserInstance.save((error, result) => {
      if (result) {
        res.status(200).send('success');
      } else {
        res.status(409).send('duplicate advertiser name');
      }
    });
  },
  getAll: async (req: Request, res: Response) => {
    res.status(200).json(await Advertiser.find());
  },
};

export default advertiserService;
