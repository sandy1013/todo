import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoMainComponent } from '../todo.main.component';
import { LoginComponent } from './Login/todo.login.component';
import { RegisterComponent } from './Register/todo.register.component';
import { TodoAuthHomeComponent } from './todo.auth.home.component';

const router: Routes = [
    { path: 'landing', component: TodoAuthHomeComponent, children: [
        { path: '', component: LoginComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class AuthRouterModule {

}
