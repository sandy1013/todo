import * as fromAuthActions from './todo.auth.actions';

const initial_state: {token: string | null} = {
    token: null
};

export function AuthReducers(state = initial_state, actions) {
   switch(actions.type) {
    case fromAuthActions.SETUP_TOKEN:
        const cloned_state = {
            ...state,
            token: actions.payload
        }
        return cloned_state;
    default: 
        return state;
   }
}