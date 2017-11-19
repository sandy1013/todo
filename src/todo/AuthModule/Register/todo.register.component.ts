import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'todo-register',
    templateUrl: 'todo.register.component.html',
    styleUrls: ['todo.register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit () {
        this.registerForm = this.fb.group({
            'username': [null, [Validators.required]],
            'email': [null, [Validators.required, Validators.email]],
            'password': [null, [Validators.required]],
            'confirm': [null, [Validators.required]],
            'cloudsync': [null]
        });
    }

    onRegister () {
        console.log('Register submitted.');
    }
}
