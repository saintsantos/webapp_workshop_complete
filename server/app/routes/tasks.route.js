import express from 'express';
import config from '../config/config';
import taskCtrl from '../controllers/tasks.controller';
const router = express.Router();

router.route('/').get(taskCtrl.getAllTasks);

export default router;
