import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

import { Todo, TodoModel, TodoSaveModel } from '../Models/todo.list.models';

import * as fromTodoListAction from '../Store/todo.list.actions';

import { TodoListService } from '../Services/todo.list.service';

@Component({
    selector: 'todo-editor',
    templateUrl: 'todo.editor.component.html',
    styleUrls: ['todo.editor.component.scss'],
    providers: [TodoListService]
})
export class TodoEditorComponent implements OnInit{
    todoState: Observable<any>;
    sync: boolean;

    constructor(private store: Store<any>, private todoListService: TodoListService) {
        this.todoState = this.store.select('todoList');
        this.store.select('auth')
        .subscribe((data) => {
            this.sync = data.sync;
        });
    }

    ngOnInit() {
        this.todoListService.FetchTodos().subscribe((response) => {
            this.store.dispatch(new fromTodoListAction.ResetAllTodos(response.todos));
        }, (error) => {
            console.log(error);
        });
    }

    onCreateTodo(form: NgForm) {
        if (form.touched && form.valid) {
            const todo = new Todo(form.value.title, form.value.description);
            if (this.sync) {
                const todo_save: TodoSaveModel = {
                    title: todo.title,
                    description: todo.description,
                    createdAt: todo.createdAt
                };

                this.todoListService.AddTodo(todo_save)
                .subscribe((response) => {
                    if (response.success) {
                        this.store.dispatch(new fromTodoListAction.ResetAllTodos(response.todos));
                    }
                }, (error) => {
                    console.log(error);
                });
            } else {
                this.store.dispatch(new fromTodoListAction.AddTodo(todo));
            }

            form.reset();
        }
    }
}
