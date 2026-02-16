import { createContext } from "react";
import type { Todo } from "../lib/types";

type TodosContextType = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodosContext = createContext<TodosContextType>({
  todos: [],
  setTodos: () => {},
})