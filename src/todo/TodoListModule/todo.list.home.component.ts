import { Component, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { TodoHomeService } from './Services/todo.home.service';

@Component({
    selector: 'todo-list-home',
    templateUrl: 'todo.list.home.component.html',
    styleUrls: ['todo.list.home.component.scss']
})
export class TodoListHomeComponent {
    menuState: boolean;

    constructor(private renderer: Renderer2, private router: Router, private homeService: TodoHomeService) {}

    onLogout() {
        this.homeService.LogoutUser().subscribe((response) => {
            if (response.success) {
                this.router.navigate(['landing/login']);
            }
        }, (error) => {
            console.log(error);
        });
        
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
