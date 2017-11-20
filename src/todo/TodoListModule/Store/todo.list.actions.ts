import { Action } from '@ngrx/store';

import { TodoModel } from '../Models/todo.list.models';

export const ADD_TODO = 'ADD_TODO';
export const RESET_ALL_TODOS = 'RESET_ALL_TODOS';
export const CLEAR__TODO_STORE = 'CLEAR__TODO_STORE';

export class AddTodo implements Action {
    readonly type = ADD_TODO;
    constructor(public payload: TodoModel) {}
}

export class ResetAllTodos implements Action {
    readonly type = RESET_ALL_TODOS;
    constructor(public payload: TodoModel[]) {}
}

export class ClearTodoStore implements Action {
    readonly type = CLEAR__TODO_STORE;
}

export type ListActions = AddTodo | ResetAllTodos | ClearTodoStore;
