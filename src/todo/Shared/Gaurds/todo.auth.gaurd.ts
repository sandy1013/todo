import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Router, Route } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGaurd implements CanLoad, CanActivate {

    constructor(private store: Store<any>, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.store.select('auth')
        .map(data => {
            if (!data.token) {
                this.router.navigate(['/landing/login']);
                return false;
            } else {
                return true;
            }
        });
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        return this.store.select('auth')
        .map(data => {
            if (!data.token) {
                this.router.navigate(['/landing/login']);
                return false;
            } else {
                return true;
            }
        });
    }
}
