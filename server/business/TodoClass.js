const TODO_MODEL = require('../models/TodoModel.js'); 

class TodoClass {
    AddTodo(user, todo) {
        return new Promise((resolve, reject) => {
            TODO_MODEL.AddTodo(user, todo).then((todo_docs) => {
                if (todo_docs) {
                    resolve(todo_docs);
                } else {
                    reject({success: false});
                }
            }, (error) => {
                reject(error);
            });
        });
    }

    FetchTodos(user) {
        return new Promise((resolve, reject) => {
            TODO_MODEL.FetchTodos(user).then((todo_docs) => {
                if (todo_docs) {
                    resolve(todo_docs);
                } else {
                    reject({success: false});
                }
            }, (error) => {
                reject(error);
            });
        });
    }
}

module.exports = new TodoClass();