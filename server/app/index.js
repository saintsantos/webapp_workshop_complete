import config from './config/config';
import app from './config/express';

/**
 * make bluebird default Promise handler
 */
Promise = require('bluebird');

const debug = require('debug');

//const db = require('./config/db');

/**
 * Listen on our port (3000)
 */
app.listen(config.express.port, () => {
    debug(`server started on port ${config.express.port}`)
});
export default app;
