import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";
import "rxjs/add/operator/switchMap";
import { Store } from "@ngrx/store";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    tokenStore: Observable<any>;

    constructor(private store: Store<any>) {
        this.tokenStore = this.store.select('auth');
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.store.select('auth')
        .take(1)
        .switchMap((state: any) => {
          const copiedReq = req.clone({headers: req.headers.set('x-auth', state.token)});
          return next.handle(copiedReq);
        })
    }
}
