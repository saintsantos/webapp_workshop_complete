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
    //For windows
    //filename: "C:\\Users\\<username>\\<path-to-app>\\webapp_workshop_complete\\server\\app\\routes\\todo.db"
    //FOr unix and mac os
    filename: "/Users/angus/Projects/Personal/webapp_workshop_complete/server/app/routes/todo.db"

}
export default config;
