/*
    - useState
    1) Init state: 0
    2) Actions: Up (state + 1), Down (state - 1)

    - useReducer
    1) Init state: 0
    2) Actions: Up (state + 1), Down (state - 1)
    3) Reducer
    4) Dispatch
*/

import { useReducer } from "react";


function LearnUseReducer() {
    const initialState = 0;

   
    const UP_ACTION = 'up';
    const DOWN_ACTION ='down';
    
    const reducer = (state, action) => {
        switch(action) {
            case UP_ACTION: 
                return state + 1;
            case DOWN_ACTION:
                return state - 1;
            default:
                throw new Error('Invalid action');
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState);

    const handleUp = () => {
        dispatch(UP_ACTION);
    }

    const handleDown = () => {
        dispatch(DOWN_ACTION);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleUp}>Up</button>
            <button onClick={handleDown}>Down</button>
        </div>
    )
}

export default LearnUseReducer
