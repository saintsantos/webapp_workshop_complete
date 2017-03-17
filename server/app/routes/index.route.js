import express from 'express';

const router = express.Router();
/**
 * All routes are imported and handled in this file
 */
//Health Check!
router.get('/hi', (req, res) =>
    res.send('Hi!')
);

export default router;
