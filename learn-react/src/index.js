import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LearnUseState from './LearnUseState';
import LearnUseEffect from './LearnUseEffect';
import LearnUseLayoutEffect from './LearnUseLayoutEffect';
import LearnUseRef from './LearnUseRef';
import LearnMemo from './LearnMemo';
import LearnUseMemo from './LearnUseMemo';
import LearnUseReducer from './LearnUseReducer';
import TodoApp_Reducer from './TodoApp_Reducer/';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoApp_Reducer/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
