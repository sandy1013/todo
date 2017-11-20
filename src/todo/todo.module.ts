import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { TodoMainComponent } from './todo.main.component';

import { TodoMainRouter } from './todo.main.router';
import { AuthModule } from './AuthModule/toto.auth.module';
import { TodoListModule } from './TodoListModule/todo.list.module';

import { UtilsService } from './Shared/Services/todo.utils.service';

import { AuthReducers } from './AuthModule/Store/todo.auth.reducers';

import { RequestInterceptor } from './Shared/Interceptors/todo.request.interseptor';

@NgModule({
    declarations: [
        TodoMainComponent
      ],
      imports: [
        BrowserModule,
        AuthModule,
        TodoMainRouter,
        StoreModule.forRoot({auth: AuthReducers})
      ],
      providers: [UtilsService],
      bootstrap: [TodoMainComponent]
})
export class TodoModule {

}
