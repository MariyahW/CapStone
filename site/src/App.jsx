import { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import Nav from "./components/Navv";
import './App.css'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Back from "./pages/Back";
import Data from "./pages/Data";
import Lead from "./pages/Lead";

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='App'>
      <Nav />
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/back" element={<Back/>}/>
        <Route path="/data" element={<Data/>}/>
        <Route path="/lead" element={<Lead/>}/>
        
      </Routes>
      </div>
      
    
  )
}

export default App
