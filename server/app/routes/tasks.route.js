import express from 'express';
import config from '../config/config';
import taskCtrl from '../controllers/tasks.controller';
const router = express.Router();

router.route('/').get(taskCtrl.getAllTasks);

router.route('/:id').post(taskCtrl.add);

export default router;
