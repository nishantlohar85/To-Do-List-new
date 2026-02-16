import Button from "./Button";
import { TodosContext } from "../contexts/TodosContext";
import { useContext, useState } from "react";
import type { Todo } from "../lib/types";

type TodoProps = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function AddTodoForm () {

    const {todos, setTodos}: TodoProps = useContext(TodosContext);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(evt.target.value);
    }

    const handleAddTask = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if(newTask.trim() === "") return;

        if(todos.length >= 3) {
            alert("Log in to add more than 3 todos");
        }
        else {
            const newTodo: Todo = {
            text: newTask,
            iscompleted: false,
            }
            setTodos([...todos, newTodo]);
            setNewTask("");
        }
    }

    return(
        <form onSubmit={handleAddTask}>
            <h2 className="font-medium text-[#231d15]">Add a todo</h2>
            <input value={newTask} className="border border-black/12 rounded-[5px] my-[9px] text-[1rem] w-full h-[2.8rem] px-[1rem]" type="text" placeholder="Enter a todo" onChange={handleInputChange} />
            <Button>Add to list</Button>
        </form>
    );
}
export default AddTodoForm