import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoMainComponent } from './todo.main.component';

import { TodoMainRouter } from './todo.main.router';
import { AuthModule } from './AuthModule/toto.auth.module';
import { TodoListModule } from './TodoListModule/todo.list.module';

import { UtilsService } from './Shared/Services/todo.utils.service';

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
      providers: [UtilsService],
      bootstrap: [TodoMainComponent]
})
export class TodoModule {

}
