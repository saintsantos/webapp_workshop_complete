import express from 'express';
import config from '../config/config';
import userCtrl from '../controllers/users.controller';
const router = express.Router();

router.route('/').get(userCtrl.getAllUsers);
router.route('/').post(userCtrl.addUser);

export default router;
