
import './App.css'
import Task from './components/Task';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About';
import Navbar from './components/Navbar';
function App() {
 

 
  return (
    <>
     <BrowserRouter>
      <div className='App'>
  
        <header><h1>MY REACT APP</h1>
        <h2>This is my first application</h2>
        </header>
        <Navbar/>
        <main>
          <Routes>
          <Route path="/" element ={<Task />}/>
          <Route path="/about" element={<About />}/>
          </Routes>
          
        </main>
      </div>
       </BrowserRouter>
    </>
  )
 
}

export default App
