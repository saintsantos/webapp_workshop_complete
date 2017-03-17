import winston from 'winston';

//Log ALL the things
const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            json: true,
            colorize: true
        })
    ]
});

export default logger;
