import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';



function App() {
 
  return (
    <div className="App" >
      <Navbar/>
      <BrowserRouter >
      <Routes>
        <Route exact path='/student/:verification' element={<Home/>}/>
        <Route exact path='/' element={<Home/>} />
      </Routes>
     
      </BrowserRouter>
    
    </div>
  );
}

export default App;
