import config from './config/config';
import app from './config/express';

// make bluebird default Promise
Promise = require('bluebird');

const debug = require('debug');

//const db = require('./config/db');

app.listen(config.express.port, () => {
    debug(`server started on port ${config.express.port}`)
});
export default app;
