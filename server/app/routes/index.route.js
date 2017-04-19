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

router.get('/task/', function(req, res) {
  db('tasks')
  .select()
  .then(function(result) {
      res.send(result);
  });
});

router.post('/task/:id',function(req, res) {
  db('tasks')
  .insert({task: req.query.task, created_by: req.params.id}, 'id')
  .then(function(id) {
    res.send(id);
  });
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
  db('tasks')
  .select('task')
  .where({created_by: req.params.id, status: 'active'})
  .then(function(tasks) {
    res.send(tasks);
  });
});

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
