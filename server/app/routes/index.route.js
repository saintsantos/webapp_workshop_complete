import express from 'express';

const router = express.Router();

//Health Check!
router.get('/hi', (req, res) =>
    res.send('Hi!')
);

export default router;
