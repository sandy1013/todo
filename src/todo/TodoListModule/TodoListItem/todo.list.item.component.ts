import { Component, Input } from '@angular/core';

import { TodoModel } from '../Models/todo.list.models';

@Component({
    selector: 'todo-list-item',
    templateUrl: 'todo.list.item.component.html',
    styleUrls: ['todo.list.item.component.scss']
})
export class TodoListItemComponent {
    @Input() todo: TodoModel;
}
