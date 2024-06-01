import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navi';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className='wrapper w-screen bg-[url(./assets/bg-full-dark.jpg)] h-auto bg-cover '>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/About" element={<About/>}/>
          </Routes>
        </div>
    </div>
    </Router>
    
  );
}

export default App;
