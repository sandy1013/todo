import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UtilsService, FormErrors } from '../../Shared/Services/todo.utils.service';
import { RegisterService } from './Services/todo.register.service';

import { UserRegister } from './Models/todo.register.models';

@Component({
    selector: 'todo-register',
    templateUrl: 'todo.register.component.html',
    styleUrls: ['todo.register.component.scss'],
    providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    errors: FormErrors;

    // tslint:disable-next-line:max-line-length
    constructor(private fb: FormBuilder, private utilsService: UtilsService, private registerService: RegisterService, private router: Router) {}

    ngOnInit() {
        this.registerForm = this.fb.group({
            'username': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(16)]],
            'email': [null, [Validators.required, Validators.email]],
            'password': [null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
            'confirm': [null, [Validators.required]],
            'cloudsync': [false, [Validators.required]]
        });

        this.errors = {
            valid: false,
            message: null,
            controls: {
                username: {
                    required: false,
                    minlength: false,
                    maxlength: false
                },
                email: {
                    required: false,
                    email: false
                },
                password: {
                    required: false,
                    minlength: false,
                    maxlength: false
                },
                confirm: {
                    required: false
                },
                cloudsync: {
                    required: false
                }
            }
        };
    }

    validate() {
        if (this.registerForm.value.password !== this.registerForm.value.confirm) {
            this.errors.valid = false;
            this.errors.message = 'Passwords do not match.';
        }

        return this.errors.valid;
    }

    onRegister() {
        if (this.utilsService.validate(this.errors, this.registerForm) && this.validate()) {
            // tslint:disable-next-line:max-line-length
            const user = new UserRegister(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.cloudsync);

            this.registerService.RegisterUser(user)
            .map(response => response.json())
            .subscribe((response) => {
                if (response.success) {
                    this.router.navigate(['landing/login']);
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
