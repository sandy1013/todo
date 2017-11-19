import { NgModule } from '@angular/core';

import { TodoEditorComponent } from './TodoEditor/todo.editor.component';

import { TodoListRouter } from './todo.list.router';
import { TodoListHomeComponent } from './todo.list.home.component';

@NgModule({
    declarations: [TodoListHomeComponent, TodoEditorComponent],
    imports: [TodoListRouter],
    exports: [TodoListRouter]
})
export class TodoListModule {

}
