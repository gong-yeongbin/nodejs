import express, { Router } from 'express';
import trackingController from './controller';
const router: Router = express.Router();

router.get('/test', (req: express.Request, res: express.Response) => {
  res.send(`hello world ${process.env.NODE_ENV}`);
});
router.get('/', trackingController.tracking);

export default router;
