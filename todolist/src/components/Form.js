import {v4 as uuidv4} from "uuid"
import { useEffect, useRef } from "react";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const inputRef = useRef();

    useEffect(() => {
        if (!editTodo) {
            setInput('');
        } else {
            setInput(editTodo.title);
        }
    }, [setInput, editTodo]);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (!editTodo) {
            // Add todo
            setTodos([
                ...todos,
                {
                    id: uuidv4(),
                    title: input,
                    completed: false
                }
            ]);
        } else {
            // Edit todo
            setTodos(todos.map((item) => {
                return item.id === editTodo.id ? { id: item.id, title: input, completed: item.completed } : item
            }))
            setEditTodo(null);
        }
        setInput('');
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
                required
                onChange={(e) => setInput(e.target.value)}   
            />

            <button 
                className="button-add" 
                type="submit"  
            >
                {!editTodo ? "Add" : "Edit"}
            </button>
        </form>
    )
}

export default Form