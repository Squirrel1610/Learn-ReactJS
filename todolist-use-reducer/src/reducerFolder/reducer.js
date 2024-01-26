import { SET_INPUT, ADD_TODO, COMPLETE_TODO, EDIT_TODO, DELETE_TODO } from './constants';

export const initialState = {
    input: '',
    todos: JSON.parse(localStorage.getItem('todosList')) ?? [],
    todoBeEdited: null
}

const reducer = (state, action) => {
    let newState;
    switch(action.type) {
        case SET_INPUT:
            newState = {
                ...state,
                input: action.payload
            }
            break;
        case ADD_TODO: 
            newState = {
                ...state,
                todos: [...state.todos, action.payload]
            }
            break;
        case COMPLETE_TODO: 
            newState = {
                ...state,
                todos: state.todos.map((todo) => (
                    todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
                ))
            }
            break;
        case DELETE_TODO: 
            newState = {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }
            break;
        case EDIT_TODO: 
            console.log(state);
            if(!state.todoBeEdited) {
                newState = {
                    ...state,
                    todoBeEdited: action.payload
                }
            } else {
                newState = {
                    ...state,
                    todos: state.todos.map((todo) => (
                        todo.id === action.payload.id ? {...todo, title: state.input} : todo
                    )),
                    todoBeEdited: null
                }
            }

            console.log(newState);
            
            break;
        default: 
            throw new Error('Invalid action');
    }

    return newState;
}

export default reducer;