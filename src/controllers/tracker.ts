import { Request, Response } from 'express';
import * as trackerService from '@src/services/tracker';

export const createTracker = (req: Request, res: Response) => {
  trackerService.createTracker(req, res);
};

export const getTracker = async (res: Response) => {
  res.status(200).json(await trackerService.getTracker());
};
