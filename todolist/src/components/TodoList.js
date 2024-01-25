const TodoList = ({ todos, setTodos, setEditTodo }) => {
    const handleCompletedTodo = (todo) => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return item;
        }))
    }

    const handleDelTodo = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleEditTodo = (todo) => {
        setEditTodo(todo);
    } 

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
                                    <button className="button-complete task-button green" onClick={() => handleCompletedTodo(todo)}>
                                        <i className='fa fa-check-circle'></i>
                                    </button>   
                                )
                                : (
                                    <button className="button-complete task-button" onClick={() => handleCompletedTodo(todo)}>
                                        <i className='fa fa-check-circle'></i>
                                    </button>  
                                )
                            }
                            <button 
                                className="button-edit task-button"                            
                                onClick={() => handleEditTodo(todo)}
                            >
                                <i className="fa fa-edit"></i>
                            </button>
                            <button 
                                className="button-delete task-button"
                                onClick={() => handleDelTodo(todo)}
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