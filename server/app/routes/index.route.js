import express from 'express';
import taskRoute from './tasks.route';
import userRoute from './users.route';

const router = express.Router();
/**
 * All routes are imported and handled in this file
 */
//Health Check!
router.get('/hi', (req, res) =>
    res.send('Hi!')
);

router.use('/user', userRoute);
router.use('/task', taskRoute);

export default router;
