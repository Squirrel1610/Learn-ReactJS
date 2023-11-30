import { SET_TODO_INPUT, ADD_TODO } from './constants';

const initState = {
    todoInput: '',
    todos: []
}

function reducer(state, action) {
    let newState;
    switch(action.type) {
        case SET_TODO_INPUT: 
            newState = {
                ...state,
                todoInput: action.payload
            }
            break;
        case ADD_TODO:
            newState = {
                ...state,
                todos: [...state.todos, action.payload]
            }
            break;
        default: 
            throw new Error('Invalid action');
    }

    return newState;
}

export { initState };
export default reducer;