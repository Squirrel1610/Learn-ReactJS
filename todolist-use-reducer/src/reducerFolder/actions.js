import { SET_INPUT, ADD_TODO, COMPLETE_TODO, EDIT_TODO, DELETE_TODO } from './constants';

export const setInput = (input) => {
    return {
        type: SET_INPUT,
        payload: input
    }
}

export const addTodo = (newTodo) => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const completeTodo = (todoId) => {
    return {
        type: COMPLETE_TODO,
        payload: todoId
    }
}

export const deleteTodo = (todoId) => {
    return {
        type: DELETE_TODO,
        payload: todoId
    }
}

export const editTodo = (todoToBeEdited) => {
    return {
        type: EDIT_TODO,
        payload: todoToBeEdited
    }
}