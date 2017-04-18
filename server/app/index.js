import config from './config/config';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import httpStatus from 'http-status';
import expressWinston from 'express-winston';
import winstonInstance from './config/winston';
import routes from './routes/index.route';

const app = express();
/**
 * make bluebird default Promise handler
 */
Promise = require('bluebird');
const debug = require('debug');
const db = require('./config/db');

if (config.env == 'development') {
    app.use(logger('dev'));
}

/**
 * Allows for parsing body of requests when an http request is received
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Same as above, but with cookies
app.use(cookieParser());


/**
 * Enables detailed API logging
 */
expressWinston.requestWhitelist.push('body');
expressWinston.responseWhitelist.push('body');
app.use(expressWinston.logger({
    winstonInstance,
    meta: true,
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    colorStatus: true
}));

/**
 * mount all routes on / path
 */
app.use('/', routes);

/**
 * winston logger
 */
app.use(expressWinston.errorLogger({
    winstonInstance
}));

/**
 * Listen on our port (3000)
 */
app.listen(config.express.port, () => {
    console.log(`server started on port ${config.express.port}`)
});
export default app;
