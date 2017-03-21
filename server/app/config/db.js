import config from './config';

var knex = require('knex')({
    client: 'mysql',
    connection: config.dbConnection
});

export default knex;
