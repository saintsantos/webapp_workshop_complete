import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import httpStatus from 'http-status';
import expressWinston from 'express-winston';
import winstonInstance from './winston';
import routes from '../routes/index.route';
import config from './config';

const app = express();

if (config.env == 'development') {
    app.use(logger('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());


//enable detailed API logging in dev env
expressWinston.requestWhitelist.push('body');
expressWinston.responseWhitelist.push('body');
app.use(expressWinston.logger({
    winstonInstance,
    meta: true,
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    colorStatus: true
}));

// mount all routes on /api path
app.use('/api', routes);

//winston logger
app.use(expressWinston.errorLogger({
    winstonInstance
}));

export default app;
