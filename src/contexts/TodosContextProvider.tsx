import { useEffect, useState, type ReactNode } from "react";
import type { Todo } from "../lib/types";
import { TodosContext } from "./TodosContext";

type ContextProps = {
    children: ReactNode;
}

const getInitialTodos = () => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
}

function TodosContextProvider({children}: ContextProps) {

    const [todos, setTodos] = useState<Todo[]>(getInitialTodos);
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return(
        <TodosContext.Provider value={{todos, setTodos}}>
            {children}
        </TodosContext.Provider>
    );
}
export default TodosContextProvider