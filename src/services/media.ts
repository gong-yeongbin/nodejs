import Media from '@src/models/Media';
import { Request, Response } from 'express';

export const createMedia = async (req: Request, res: Response) => {
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
};

export const getMedia = async () => {
  return await Media.find();
};
