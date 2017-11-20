import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable() 
export class TodoHomeService {
    constructor(private httpClient: HttpClient) {}

    LogoutUser() {
        return this.httpClient.get<any>('/api/logout', {
            observe: 'body',
            responseType: 'json',
            params: new HttpParams().set('all', 'false')
        });
    }
}