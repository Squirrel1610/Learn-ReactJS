import { hooks, actions } from './store';
import { useRef } from 'react';

function TodoApp_GlobalState() {
    const [ state, dispatch ] = hooks.useStore();
    const { todoInput, todos } = state; 
    const inputRef = useRef();

    const handleInputTodo = () => {
        dispatch(actions.addTodo(todoInput));
        dispatch(actions.setTodoInput(''));
        inputRef.current.focus();
    }

    return (
        <div>
            <input 
                value={todoInput}
                onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
                placeholder='Enter todo'
                ref={inputRef}
                >
            </input>
            <button onClick={handleInputTodo}>Enter</button>

            <h1>List</h1>

            <ul>
                {
                    todos.map((todo, idx) => <li key={idx}>{todo}</li>)
                }
            </ul>
        </div>
    )
}

export default TodoApp_GlobalState;