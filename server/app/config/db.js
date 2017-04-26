import config from './config';

var knex = require('knex')({
    client: 'sqlite3',
    connection: config.dbConnection
});

export default knex;
