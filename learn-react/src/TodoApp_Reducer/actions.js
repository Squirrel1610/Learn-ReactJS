import { SET_TODO, ADD_TODO, DELETE_TODO } from './constants';

export const setTodo = (todo) => {
    return {
        type: SET_TODO,
        payload: todo
    }
}

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        payload: index
    }
}