import express from 'express';
import db from '../config/db';
import config from '../config/config';

const router = express.Router();
/**
 * All routes are imported and handled in this file
 */
//Health Check!
router.get('/hi', (req, res) =>
    res.send('Hi!')
);

//Task routes
router.get('/task/', function(req, res) {
  //This should grab and return all tasks
  //in the backend
});

router.post('/task/:id',function(req, res) {
  //This should add a task to the database
  //Where the 'created_by' column should be
  //represented by :id
});

router.get('/task/:id', function(req, res) {
  db('tasks')
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
  db('users')
  .select()
  .then(function(result) {
    res.send(result);
  });
});

router.post('/user/', function(req, res) {
  db('users')
  .insert({username: req.query.username})
  .then(function() {
      db('users')
      .select()
      .where({username: req.query.username})
      .then(function(result) {
          res.send(result);
      });
  });
});
router.get('/user/:id', function(req, res) {
  db('users')
  .select()
  .where({id: req.params.id})
  .then(function(result) {
      res.send(result);
  });
});


export default router;
