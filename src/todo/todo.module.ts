import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoMainComponent } from './todo.main.component';

import { TodoMainRouter } from './todo.main.router';
import { AuthModule } from './AuthModule/toto.auth.module';
import { TodoListModule } from './TodoListModule/todo.list.module';

@NgModule({
    declarations: [
        TodoMainComponent
      ],
      imports: [
        BrowserModule,
        AuthModule,
        TodoListModule,
        TodoMainRouter
      ],
      providers: [],
      bootstrap: [TodoMainComponent]
})
export class TodoModule {

}
