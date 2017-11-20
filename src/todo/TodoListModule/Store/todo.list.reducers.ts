import * as fromTodoListActions from '../Store/todo.list.actions';
import { TodoModel } from '../Models/todo.list.models';

const init_state: {todos: TodoModel[]} = {
    todos: []
};

export function TodoListReducer(state = init_state, actions) {
    switch (actions.type) {
        case fromTodoListActions.ADD_TODO:
            const copied_state1 = {
                ...state,
                todos: [...state.todos, actions.payload]
            };
            return copied_state1;
        case fromTodoListActions.RESET_ALL_TODOS:
            const copied_state2 = {
                ...state,
                todos: actions.payload
            };
            return copied_state2;
        case fromTodoListActions.CLEAR__TODO_STORE:
            const copied_state3 = init_state;
            return copied_state3;
        default:
            return state;
    }
}
