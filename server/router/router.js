const express = require('express');
const bodyParser = require('body-parser');

const UserClass = require('../business/UserClass');
const TodoClass = require('../business/TodoClass');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

let authenticate = function(req, res, next) {
    const token = req.header('x-auth');
    if (!token) {
        res.status(403).send({success : false});
    } else {
        UserClass.AuthenticateUser(token).then((user) => {
            req.user = user;
            req.token = token;
            next();
        }, (error) => {
            res.status(403).send({success : false});
        })
    }
};

router.post('/register', (req, res) => {
    UserClass.RegisterUser(req.body).then((user_doc) => {
        res.status(200).send(user_doc);
    }, (error) => {
        res.status(200).send(error);
    });
});

router.post('/login', (req, res) => {
    UserClass.LoginUser(req.body).then((user_doc) => {
        res.status(200).header('x-auth', user_doc.token).send(user_doc.data);
    }, (error) => {
        res.status(403).send(error);
    });
});

router.get('/logout', authenticate, (req, res) => {
    const all = (req.query.all && req.query.all == 'true') ? true : false;

    req.user.RemoveToken(req.token, all).then((user) => {
        res.status(200).send({'success': true});
    }, (error) => {
        res.status(200).send({'success': false});
    });
});

router.put('/todo/add', authenticate, (req, res) => {
    TodoClass.AddTodo(req.user, req.body).then((todo_docs) => {
        TodoClass.FetchTodos(req.user).then((todo_docs) => {
            res.status(200).send({success: true, todos: todo_docs}); 
        }, (error) => {
            res.status(403).send(error); 
        });
    }, (error) => {
        res.status(403).send(error); 
    });
});

router.get('/todo/fetch', authenticate, (req, res) => {
    TodoClass.FetchTodos(req.user).then((todo_docs) => {
        res.status(200).send({success: true, todos: todo_docs}); 
    }, (error) => {
        res.status(403).send(error); 
    });
});

module.exports = router;