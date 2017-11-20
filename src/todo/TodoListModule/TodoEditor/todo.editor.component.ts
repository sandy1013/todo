import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Todo } from '../Models/todo.list.models';

@Component({
    selector: 'todo-editor',
    templateUrl: 'todo.editor.component.html',
    styleUrls: ['todo.editor.component.scss']
})
export class TodoEditorComponent {
    onCreateTodo(form: NgForm) {
        console.log(form);
        if (form.touched && form.valid) {
            const todo = new Todo(form.value.title, form.value.description);
            console.log(todo);
        }
    }
}
