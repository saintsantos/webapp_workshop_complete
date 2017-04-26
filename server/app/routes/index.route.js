import express from 'express';
import config from '../config/config';
const router = express.Router();

var knex = require('knex')({
    client: 'sqlite3',
    connection: config.dbConnection
});
/**
 * All routes are imported and handled in this file
 */
//Health Check!
router.get('/hi', (req, res) =>
    res.send('Hi!')
);

//Task routes
router.get('/task/', function(req, res) {
  knex('tasks')
  .select()
  .then(function(result) {
    res.send(result);
  });
  //This should grab and return all tasks
  //in the backend
});

router.post('/task/:id',function(req, res) {
  knex('tasks')
  .insert({task: req.body.task, created_by: req.params.id}).then(function() {
    res.send("Task added");
  })
  //This should add a task to the database
  //Where the 'created_by' column should be
  //represented by :id
});

router.get('/task/:id', function(req, res) {
  knex('tasks')
  .select('task')
  .where({created_by: req.params.id})
  .then(function(tasks) {
    res.send(tasks);
  });
});

router.get('/task/:id/active', function(req, res) {
  //This should only return active tasks that are in
  //the database
});

//User routes
router.get('/user/', function(req, res) {
  knex('users')
  .select()
  .then(function(result) {
    res.send(result);
  });
});

router.post('/user/', function(req, res) {
  knex('users')
  .insert({username: req.query.username})
  .then(function() {
      knex('users')
      .select()
      .where({username: req.query.username})
      .then(function(result) {
          res.send(result);
      });
  });
});
router.get('/user/:id', function(req, res) {
  knex('users')
  .select()
  .where({id: req.params.id})
  .then(function(result) {
      res.send(result);
  });
});


export default router;
