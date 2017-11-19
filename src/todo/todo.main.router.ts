import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const router: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: '**', redirectTo: '/landing'}
];

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})
export class TodoMainRouter {

}
