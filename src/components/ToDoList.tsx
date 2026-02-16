import type { Todo } from '../lib/types';
import DeleteBtn from './DeleteBtn';
import { TodosContext } from '../contexts/TodosContext';
import { useContext } from 'react';

type TodoProps = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function ToDoList () {
    const {todos, setTodos}: TodoProps = useContext(TodosContext);
    
    const handleIsCompleted = (index: number) => {
        setTodos(todos.map((todo, i) => (i === index ? {...todo, iscompleted: !todo.iscompleted} : {...todo})));
    }
    
    return(
        <ul>
            {todos.length === 0 && <li className='h-full flex justify-center items-center font-bold text-[1.5rem] text-black/35'>Start by adding a todo...</li>}

            {todos.map((todo, index) => (
                <li key={index} className="flex justify-between items-center px-[2rem] h-[3.125rem] text-[14px] cursor-pointer border-b border-black/10 font-medium" onClick={() => {handleIsCompleted(index)}}><span className={todo.iscompleted ? 'line-through text-[#ccc]' : ''}>{todo.text}</span> <DeleteBtn index={index} setTodos={setTodos} /></li>
            ))}
        </ul>
    );
}
export default ToDoList