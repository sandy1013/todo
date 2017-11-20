import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGaurd } from './Shared/Gaurds/todo.auth.gaurd';

const router: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    {path: 'home', canActivate: [AuthGaurd], loadChildren: './TodoListModule/todo.list.module#TodoListModule'},
    { path: '**', redirectTo: '/landing'}
];

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})
export class TodoMainRouter {

}
