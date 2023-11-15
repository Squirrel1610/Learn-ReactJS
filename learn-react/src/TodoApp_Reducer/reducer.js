import { SET_TODO, ADD_TODO, DELETE_TODO } from './constants';

export const initialState = {
    todo: '',
    todoList: []
}

const reducer = (state, action) => {
    let newState;
    switch(action.type) {
        case SET_TODO:
            newState = {
                ...state,
                todo: action.payload
            }
            break;
        case ADD_TODO: 
            newState = {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
            break;
        case DELETE_TODO:
            newState = {
                ...state,
                todoList: state.todoList.filter((_, index) => index !== action.payload)
            }
            break;
        default: 
            throw new Error('Invalid action');
    }

    return newState;
}

export default reducer;