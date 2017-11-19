import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthRouterModule } from './todo.auth.router';

import { LoginComponent } from './Login/todo.login.component';
import { RegisterComponent } from './Register/todo.register.component';
import { TodoAuthHomeComponent } from './todo.auth.home.component';

import { PasswordStrengthDirective } from '../Shared/Derectives/todo.passwordsetrength.drirective';

@NgModule({
    declarations: [TodoAuthHomeComponent, LoginComponent, RegisterComponent, PasswordStrengthDirective],
    imports: [CommonModule, ReactiveFormsModule, HttpModule, AuthRouterModule],
    exports: [AuthRouterModule]
})
export class AuthModule {

}
