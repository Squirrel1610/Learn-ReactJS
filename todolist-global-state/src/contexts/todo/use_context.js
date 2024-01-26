import { useContext } from "react";
import TodoContext from "./context";

const useTodoContext = () => useContext(TodoContext);

export default useTodoContext;