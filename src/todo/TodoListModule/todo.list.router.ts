import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListHomeComponent } from './todo.list.home.component';
import { TodoEditorComponent } from './TodoEditor/todo.editor.component';

const router: Routes = [
    { path: '', component: TodoListHomeComponent, children: [
        { path: '', component: TodoEditorComponent },
        { path: 'editor', component: TodoEditorComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class TodoListRouter {

}
