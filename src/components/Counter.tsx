import { useContext } from "react";
import { TodosContext } from '../contexts/TodosContext';

function Counter() {
  const { todos } = useContext(TodosContext);
  const completedCount = todos.filter((todo) => todo.iscompleted).length;

  return (
    <p>
      <b>{completedCount}</b> / {todos.length} todos completed
    </p>
  );
}

export default Counter;