import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { UserLoginModel } from '../Models/todo.login.models';

@Injectable()
export class LoginService {
    constructor(private http: Http) {}

    LoginUser(user: UserLoginModel) {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');

        return this.http.post('/api/login', user, {
            headers: headers
        });
    }
}
