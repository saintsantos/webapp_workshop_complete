// this will get the S3 credentials and other config from the .env file
/**
 * [config description]
 * @type {Object}
 */
var config = {};
/**
 * [express description]
 * ports to listen on
 */
config.express = {
    port: process.env.PORT || 3000,
    ip: '127.0.0.1' //localhost
}

//mysql stuff
config.dbConnection = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'new-password',
    database: 'todo',
    charset: 'utf8',
    debug: true
}
export default config;
