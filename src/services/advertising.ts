import Advertiser from '@src/models/Advertiser';
import Advertising from '@src/models/Advertising';
import Tracker from '@src/models/Tracker';
import { Request, Response } from 'express';

const advertisingService = {
  create: async (req: Request, res: Response) => {
    const advertiserInstance = await Advertiser.findOne({ _id: req.body.advertiser });
    const trackerInstance = await Tracker.findOne({ _id: req.body.tracker });

    const advertisingInstance = new Advertising();
    advertisingInstance.name = req.body.name;
    advertisingInstance.platform = req.body.platform;
    advertisingInstance.imageUrl = req.body.imageUrl;
    advertisingInstance.advertiser = advertiserInstance?.id;
    advertisingInstance.tracker = trackerInstance?.id;

    advertisingInstance.save((error, result) => {
      if (result) {
        res.status(200).send('success');
      } else {
        res.status(409).send('duplicate advertising name');
      }
    });
  },

  get: async (req: Request, res: Response) => {
    res.status(200).json(await Advertising.find());
  },
};

export default advertisingService;
