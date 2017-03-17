// this will get the S3 credentials and other config from the .env file
var config = {};

config.express = {
    port: process.env.PORT || 3000,
    ip: '127.0.0.1'
}

//mysql stuff
config.dbConnection = {
    host: 'localhost',
    user: '',
    port: 3306,
    password: '',
    database: '',
    charset: 'utf8',
    debug: true
}
export default config;
