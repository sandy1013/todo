import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { TodoListRouter } from './todo.list.router';

import { TodoEditorComponent } from './TodoEditor/todo.editor.component';
import { TodoListHomeComponent } from './todo.list.home.component';
import { TodoListItemComponent } from './TodoListItem/todo.list.item.component';

import { TodoHomeService } from './Services/todo.home.service';

import { RequestInterceptor } from '../Shared/Interceptors/todo.request.interseptor';

import { TodoListReducer } from './Store/todo.list.reducers';

import { ToDatePipe } from './Pipes/todo.to.date.pipe';

@NgModule({
    declarations: [TodoListHomeComponent, TodoEditorComponent, TodoListItemComponent, ToDatePipe],
    imports: [CommonModule, FormsModule, HttpClientModule, TodoListRouter,
        StoreModule.forFeature('todoList', TodoListReducer)],
    exports: [TodoListRouter],
    providers: [TodoHomeService, {
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
    }]
})
export class TodoListModule {

}
