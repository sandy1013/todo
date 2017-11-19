import { NgModule } from '@angular/core';

import { AuthRouterModule } from './todo.auth.router';

import { LoginComponent } from './Login/todo.login.component';
import { RegisterComponent } from './Register/todo.register.component';
import { TodoAuthHomeComponent } from './todo.auth.home.component';

@NgModule({
    declarations: [TodoAuthHomeComponent, LoginComponent, RegisterComponent],
    imports: [AuthRouterModule],
    exports: [AuthRouterModule]
})
export class AuthModule {

}
