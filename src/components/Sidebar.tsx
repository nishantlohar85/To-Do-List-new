import AddTodoForm from './AddTodoForm'
import Button from './Button'
function Sidebar () {
    return(
        <section className='flex flex-col justify-between bg-[#fffcf9] border-l border-black/10 px-[1.5rem] pt-[1.1rem] pb-[1.75rem]'>
            <AddTodoForm />
            <div className="space-y-2">
                <Button buttonType="secondary">Log In</Button>
                <Button buttonType="secondary">Register</Button>
            </div>
        </section>
    );
}
export default Sidebar