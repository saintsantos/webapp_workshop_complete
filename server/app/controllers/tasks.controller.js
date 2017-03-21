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
export default {getAllTasks, add};
