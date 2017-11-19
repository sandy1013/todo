import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { UtilsService, FormErrors } from '../../Shared/Services/todo.utils.service';
import { LoginService } from './Services/todo.login.service';
import { UserLogin } from './Models/todo.login.models';

@Component({
    selector: 'todo-login',
    templateUrl: 'todo.login.component.html',
    styleUrls: ['todo.login.component.scss'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    errors: FormErrors;

    constructor(private fb: FormBuilder, private utilService: UtilsService, private loginService: LoginService, private router: Router) {}

    ngOnInit() {
        this.loginForm = this.fb.group({
            'email': [null, [Validators.required, Validators.email]],
            'password': [null, [Validators.required]]
        });

        this.errors = {
            valid: false,
            message: null,
            controls: {
                email : {
                    required: false,
                    email: false
                },
                password: {
                    required: false
                }
            }
        };
    }

    onLogin() {
        if (this.utilService.validate(this.errors, this.loginForm)) {
            const user = new UserLogin(this.loginForm.value.email, this.loginForm.value.password);
            this.loginService.LoginUser(user)
            .map(response => response.json())
            .subscribe((response) => {
                if (response.success) {
                    this.router.navigate(['home']);
                }
            }, (error) => {
                const payload = error.json();
                if (!payload.success) {
                    this.errors.valid = false;
                    this.errors.message = payload.err_msg;
                }
            });
        }
    }
}
