import config from './config';

var knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: 'todo.sqlite',
      debug: true
    }
});

export default knex;
