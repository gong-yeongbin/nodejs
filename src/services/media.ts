import Media from '@src/models/Media';
import { Request, Response } from 'express';

const mediaService = {
  create: async (req: Request, res: Response) => {
    const mediaInstance = new Media();
    mediaInstance.name = req.body.name;
    mediaInstance.installPostbackUrl = req.body.installPostbackUrl;
    mediaInstance.eventPostbackUrl = req.body.eventPostbackUrl;

    mediaInstance.save((_, result) => {
      if (result) {
        res.status(200).send('success');
      } else {
        res.status(409).send('duplicate advertiser name');
      }
    });
  },
  getAll: async (req: Request, res: Response) => {
    res.status(200).json(await Media.find());
  },
};

export default mediaService;
