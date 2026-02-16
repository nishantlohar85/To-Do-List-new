import Counter from './Counter';
import Logo from './Logo'

function Header () {
    return(
        <header className='flex justify-between items-center px-[1.75rem] col-[1/3] bg-[#fbf5ed] border-b border-black/10'>
            <Logo />

            <Counter />
        </header>
    );
}
export default Header