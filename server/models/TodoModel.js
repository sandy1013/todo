const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    _userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
});

TodoSchema.statics.AddTodo = function(user, todo) {
    const Todos = this;
    const todoObj = {};

    todoObj._userId = user._id;
    todoObj.title = todo.title;
    todoObj.description = todo.description;
    todoObj.createdAt = new Date(todo.createdAt);

    return new Todos(todoObj).save();
};

TodoSchema.statics.FetchTodos = function(user) {
    return new Promise((resolve, reject) => {
        const Todos = this;

        Todos.find({_userId: user._id}, (err, todo_docs) => {
            if (todo_docs) {
                resolve(todo_docs);
            } else {
                reject({success: false});
            }
        });
    });
};

module.exports = mongoose.model('Todo', TodoSchema);

