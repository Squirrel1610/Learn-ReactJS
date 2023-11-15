import { useReducer, useRef } from "react";
import { addTodo, deleteTodo, setTodo } from "./actions";
import reducer, { initialState } from "./reducer";

function TodoApp_Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const inputRef = useRef();

    const handleAddTodo = () => {
        dispatch(addTodo(state.todo));
        dispatch(setTodo(''));
        inputRef.current.focus();
    }

    const handleDeleteTodo = (index) => {
        dispatch(deleteTodo(index));
    }

    return (
        <div style={{padding: '20px'}}>
            <h1>Todo App By UseReducer</h1>

            <input type="text" 
                placeholder="Enter job"
                ref={inputRef}
                value={state.todo}
                onChange={(e) => dispatch(setTodo(e.target.value))}
            >
            </input>
            <button onClick={handleAddTodo}>Add</button>
            <hr></hr>
            <ul>
                {
                    state.todoList.map((job, index) => {
                        return <li key={index}>
                            {job}
                            <span onClick={() => handleDeleteTodo(index)} style={{marginLeft: '10px'}}>
                                &times;
                            </span>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoApp_Reducer