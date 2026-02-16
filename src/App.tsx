import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import Sidebar from './components/Sidebar'

function App() {
  
  return(
    <div className='flex justify-center items-center flex-col font-sans bg-[#f1d4b3] min-h-screen'>

      <main className='w-[65%] h-[80vh] bg-white rounded-[8px] shadow-[4px_4px_4px_rgba(0,0,0,0.1)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden'>
          <Header />

          <ToDoList />

          <Sidebar />
      </main>
      
      <Footer />
    </div>
  );
  
}

export default App
