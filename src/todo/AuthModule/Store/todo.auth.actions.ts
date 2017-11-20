import { Action } from '@ngrx/store';

export const SETUP_TOKEN = 'SETUP_TOKEN';
export const CLEAR_AUTH_STORE = 'CLEAR_AUTH_STORE';

export class SetupToken implements Action {
    readonly type = SETUP_TOKEN;
    constructor(public payload: {token: string|null, sync: boolean}) {}
}

export class ClearAuthStore implements Action {
    readonly type = CLEAR_AUTH_STORE;
    constructor() {}
}

export type AuthActions = SetupToken;
