import {v4 as uuidv4} from "uuid"
import { useEffect, useRef } from "react";
import useTodoContext from '../contexts/todo/use_context';

const Form = ({ setInput, addTodo, editTodo }) => {
    const { state, dispatch } = useTodoContext();
    const inputRef = useRef();
    const { input, todoBeEdited } = state;

    useEffect(() => {
        if(todoBeEdited) {
            dispatch(setInput(todoBeEdited.title));
        } else {
            dispatch(setInput(''));
        }
    }, [setInput, todoBeEdited, dispatch]);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(!todoBeEdited) {
            // Add Todo
            const newTodo = {
                id: uuidv4(),
                title: input,
                completed: false
            }
            dispatch(addTodo(newTodo));
        } else {
            // Edit Todo
            dispatch(editTodo(todoBeEdited));
        }

        dispatch(setInput(''));
        inputRef.current.focus();
    }

    return (
        <form onSubmit={(e) => handleSubmitForm(e)}>
            <input 
                type="text" 
                placeholder="Enter a todo...." 
                className="task-input" 
                ref={inputRef}
                value={input}
                onChange={(e) => dispatch(setInput(e.target.value))}
                required
                
            />

            <button 
                className="button-add" 
                type="submit"  
            >
                {todoBeEdited ? "Edit" : "Add"}
            </button>
        </form>
    )
}

export default Form