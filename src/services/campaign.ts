import Advertising from '@src/models/Advertising';
import Campaign from '@src/models/Campaign';
import Media from '@src/models/Media';
import { Request, Response } from 'express';
import crypto from 'crypto';

const campaginService = {
  create: async (req: Request, res: Response) => {
    const advertisingInstance = await Advertising.findByAdvertisingId(req.body.advertising);
    const mediaInstance = await Media.findByMediaId(req.body.media);

    const campaignInstance = new Campaign();
    campaignInstance.token = crypto.randomBytes(10).toString('base64');
    campaignInstance.name = req.body.name;
    campaignInstance.type = req.body.type;
    campaignInstance.trackerTrackingUrl = req.body.trackerTrackingUrl;
    campaignInstance.advertising = advertisingInstance.id;
    campaignInstance.event = advertisingInstance.event;
    campaignInstance.media = mediaInstance.id;

    campaignInstance.save((error, result) => {
      if (result) {
        res.status(200).send('success');
      } else {
        res.status(409).send('duplicate campaign name');
      }
    });
  },
  get: async () => {},
  getAll: async (req: Request, res: Response) => {
    res.status(200).json(await Campaign.find());
  },
};

export default campaginService;
