import React, {useEffect, useState} from 'react'
import {Routes, Route, Link} from "react-router-dom";
import { Themeprovider } from './context/ThemeContext';
import face from './img/face.png'

import './App.css';
// import About from './Component/About';
// import Contact from './Component/Contact';
// import Home from './Component/Home';
import Nav from './Component/Nav';
import Pocket from './routes/Pocket';
// import Project from './Component/Project';
// import Skills from './Component/Skills';
// import face from './img/face.png'
// import scroll from './img/scroll.png'
// import whitemode from './img/whitemode.png'
import Home from './routes/Home';

import Portfolio from './routes/Portfolio';
import ThemeToggle from './Component/Themetoggle';
import Contact from './Component/Contact';


function App() {



  
  const [showComponent, setShowComponent] = useState(false);

  useState(() => {
      setInterval(() => {
       setShowComponent(true);
      }, 3700);
  }, []);

  return <Themeprovider>
     {showComponent &&   <ThemeToggle />}

    
   

  <Routes>
      
       <Route path="/" element={<Home />} />
       <Route path="pocket" element={<Pocket />} />
       <Route path="portfolio" element={<Portfolio />} />
     </Routes>
     {showComponent &&  <Contact />}
   

  </Themeprovider>

}

export default App;
