import { useEffect } from 'react';

import { setInput, addTodo, completeTodo, deleteTodo, editTodo } from './contexts/todo/actions';
import useTodoContext from './contexts/todo/use_context';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

const  App = () => {
  const { state } = useTodoContext();

  useEffect(() => {
    localStorage.setItem('todosList', JSON.stringify(state.todos));
  }, [state.todos])

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form 
            setInput={setInput}
            addTodo={addTodo}
            editTodo={editTodo}
          />
        </div>
        <div>
          <TodoList
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
