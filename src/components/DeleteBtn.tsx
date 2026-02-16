type DeleteBtnProps = {
    index: number;
    setTodos: React.Dispatch<React.SetStateAction<{
    text: string;
    iscompleted: boolean;
}[]>>
}

function DeleteBtn ({index, setTodos}: DeleteBtnProps) {

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        setTodos(t => t.filter((_, i) => i !== index));
    }

    return(
        <button className="cursor-pointer" onClick={handleDelete} type="button">❌</button>
    );
}
export default DeleteBtn