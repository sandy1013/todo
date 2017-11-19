import { Component, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'todo-list-home',
    templateUrl: 'todo.list.home.component.html',
    styleUrls: ['todo.list.home.component.scss']
})
export class TodoListHomeComponent {
    menuState: boolean;

    constructor(private renderer: Renderer2, private router: Router) {}

    onLogout() {
        this.router.navigate(['landing/login']);
    }

    onMenu(menu: ElementRef) {
        this.menuState = !this.menuState;
        if (this.menuState) {
            this.renderer.addClass(menu, 'show');
        } else {
            this.renderer.removeClass(menu, 'show');
        }
    }
}
