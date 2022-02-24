import Tracker from '@models/Tracker';
import { Request, Response } from 'express';

export const createTracker = (req: Request, res: Response) => {
  const trackerinstance = new Tracker();
  trackerinstance.name = req.body.name;
  trackerinstance.trackingUrl = req.body.trackingUrl;
  trackerinstance.installPostbackUrl = req.body.installPostbackUrl;
  trackerinstance.eventPostbackUrl = req.body.eventPostbackUrl;

  trackerinstance.save((_, result) => {
    if (result) {
      res.status(200).send('success');
    } else {
      res.status(409).send('duplicate tracker name');
    }
  });
};

export const getTracker = async () => {
  return await Tracker.find();
};
