import express, { Router } from 'express';
import trackingController from './controller';
const router: Router = express.Router();

router.get('/', trackingController.tracking);

export default router;
