import Advertising, { IAdvertising } from '@src/models/Advertising';
import Campaign from '@src/models/Campaign';
import Media, { IMedia } from '@src/models/Media';
import { Request, Response } from 'express';
import { Document } from 'mongoose';

const campaginService = {
  create: async (req: Request, res: Response) => {
    const advertisingInstance: Document<IAdvertising> | null = await Advertising.findOne({
      _id: req.body.advertising,
    });
    const mediaInstance: Document<IMedia> | null = await Media.findOne({
      _id: req.body.media,
    });

    const campaignInstance = new Campaign();
    campaignInstance.token = 'randomtoken';
    campaignInstance.name = req.body.name;
    campaignInstance.type = req.body.type;
    campaignInstance.trackerTrackingUrl = req.body.trackerTrackingUrl;
    campaignInstance.advertising = advertisingInstance?.id;
    campaignInstance.media = mediaInstance?.id;

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
