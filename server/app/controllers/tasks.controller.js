import db from '../config/db';
function getAllTasks(req, res, next) {
    db('tasks').select().then(function(result) {
        res.send(result);
    });
}


export default {getAllTasks};
