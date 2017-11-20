import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoListService {

    constructor(private httpClient: HttpClient) {}

    AddTodo(user) {
        return this.httpClient.put<any>('/api/todo/add', user, {
            observe: 'body',
            responseType: 'json'
        });
    }

    FetchTodos() {
        return this.httpClient.get<any>('/api/todo/fetch', {
            observe: 'body',
            responseType: 'json'
        });
    }
}
