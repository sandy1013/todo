import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'todo-login',
    templateUrl: 'todo.login.component.html',
    styleUrls: ['todo.login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit () {
        this.loginForm = this.fb.group({
            'email': [null, [Validators.required, Validators.email]],
            'password': [null, [Validators.required]]
        });
    }

    onLogin () {
        console.log('Login submitted.');
    }
}
