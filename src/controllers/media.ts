import { Request, Response } from 'express';
import * as mediaService from '@src/services/media';

export const createMedia = async (req: Request, res: Response) => {
  await mediaService.createMedia(req, res);
};
export const getMedia = async (res: Response) => {
  res.status(200).json(await mediaService.getMedia());
};
