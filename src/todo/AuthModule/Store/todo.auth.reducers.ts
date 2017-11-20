import * as fromAuthActions from './todo.auth.actions';

const initial_state: {token: string | null, sync: boolean} = {
    token: null,
    sync: true
};

export function AuthReducers(state = initial_state, actions) {
   switch (actions.type) {
    case fromAuthActions.SETUP_TOKEN:
        const cloned_state = {
            ...state,
            token: actions.payload.token,
            sync: actions.payload.sync,
        };
        return cloned_state;
    case fromAuthActions.CLEAR_AUTH_STORE:
        const cloned_state1 = initial_state;
        return cloned_state1;
    default:
        return state;
   }
}
