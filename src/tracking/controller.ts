import express from 'express';
import trackingService from '../services/trackingService';

const tracking = (req: express.Request, res: express.Response) => {
  res.send(trackingService.tracking());
};

export default { tracking };
