import { useEffect, useReducer } from 'react';

import { setInput, addTodo, completeTodo, deleteTodo, editTodo } from './reducerFolder/actions';
import reducer, { initialState } from './reducerFolder/reducer';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

const  App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
            state={state}
            dispatch={dispatch}
            setInput={setInput}
            addTodo={addTodo}
            editTodo={editTodo}
          />
        </div>
        <div>
          <TodoList
            state={state}
            dispatch={dispatch}
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
