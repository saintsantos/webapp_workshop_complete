import db from '../config/db';
function getAllUsers(req, res, next) {
    db('users').select().then(function(result) {
        res.send(result);
    });
}

function addUser(req, res, next) {
    db('users').insert({username: req.query.username}).then(function() {
        db('users').select().where({username: req.query.username}).then(function(result) {
            res.send(result);
        })
    });
}

function getSpecUser(req, res, next) {
    db('users').select().where({id: req.params.id}).then(function(result) {
        res.send(result);
    })
}

export default {getAllUsers, addUser ,getSpecUser};
