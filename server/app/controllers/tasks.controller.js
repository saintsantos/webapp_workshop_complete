import db from '../config/db';
function getAllTasks(req, res, next) {
    db('tasks').select().then(function(result) {
        res.send(result);
    });
}

function add(req, res, next) {
	db('tasks').insert({task: req.query.task, created_by: req.params.id}, 'id').then(function(id) {
		res.send(id);
    });
}

function getUserTasks(req, res, next) {
	db('tasks').select('task').where({created_by: req.params.id}).then(function(tasks) {
		res.send(tasks);
	});
}

function getActiveTasks(req, res, next) {
	db('tasks').select('task').where({created_by: req.params.id, status: 'active'}).then(function(tasks) {
		res.send(tasks);
	});
}

export default {getAllTasks, add, getUserTasks, getActiveTasks};
