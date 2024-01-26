import { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import TodoContext from "./context";

const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;