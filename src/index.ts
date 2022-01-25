import express, { Router } from 'express';
import trackingRoute from './tracking/route';

const router: Router = express.Router();

router.use('/tracking', trackingRoute);

export default router;
