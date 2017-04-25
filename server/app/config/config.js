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
//CHange directory path for sqlite here
config.dbConnection = {
    filename: "<insert path to workshop>/webapp_workshop_complete/server/app/routes/todo.db"
}
export default config;
