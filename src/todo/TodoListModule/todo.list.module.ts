import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TodoEditorComponent } from './TodoEditor/todo.editor.component';

import { TodoListRouter } from './todo.list.router';
import { TodoListHomeComponent } from './todo.list.home.component';

import { TodoHomeService } from './Services/todo.home.service';

import { RequestInterceptor } from '../Shared/Interceptors/todo.request.interseptor';


@NgModule({
    declarations: [TodoListHomeComponent, TodoEditorComponent],
    imports: [CommonModule, FormsModule, HttpClientModule, TodoListRouter],
    exports: [TodoListRouter],
    providers: [TodoHomeService, {
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
    }]
    
})
export class TodoListModule {

}
