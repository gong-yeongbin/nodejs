import Tracker from '@src/models/Tracker';
import { Request, Response } from 'express';

const trackerService = {
  create: (req: Request, res: Response) => {
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
  },
  getAll: async (req: Request, res: Response) => {
    res.status(200).json(await Tracker.find());
  },
};

export default trackerService;
