import { Action } from '@ngrx/store';

export const SETUP_TOKEN = 'SETUP_TOKEN';

export class SetupToken implements Action {
    readonly type = SETUP_TOKEN;
    constructor(public payload: string) {}
}

export type AuthActions = SetupToken;