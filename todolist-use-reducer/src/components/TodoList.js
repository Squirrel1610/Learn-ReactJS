const TodoList = ({ state, dispatch, completeTodo, deleteTodo, editTodo }) => {
    const { todos } = state;

    return (
        <div>
            {
                todos.map((todo) => (
                    <li className="list-item" key={todo.id}>
                        <input 
                            type="text"
                            value={todo.title}
                            className={`list ${todo.completed ? "complete" : ""}`}
                            onChange={(e) => e.preventDefault()}
                        />

                        <div>
                            {
                                todo.completed === true ? (
                                    <button className="button-complete task-button green" onClick={() => dispatch(completeTodo(todo.id))}>
                                        <i className='fa fa-check-circle'></i>
                                    </button>   
                                )
                                : (
                                    <button className="button-complete task-button" onClick={() => dispatch(completeTodo(todo.id))}>
                                        <i className='fa fa-check-circle'></i>
                                    </button>  
                                )
                            }
                            <button 
                                className="button-edit task-button"                            
                                onClick={() => dispatch(editTodo(todo))}
                            >
                                <i className="fa fa-edit"></i>
                            </button>
                            <button 
                                className="button-delete task-button"
                                onClick={() => dispatch(deleteTodo(todo.id))}
                            >
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    </li>
                ))
            }
        </div>
    )
}

export default TodoList;