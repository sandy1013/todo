import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { UserRegisterModel } from '../Models/todo.register.models';

@Injectable()
export class RegisterService {
    constructor(private http: Http) {}

    RegisterUser(user: UserRegisterModel) {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');

        return this.http.post('api/register', user, {
            headers: headers
        });
    }
}
