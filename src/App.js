import React from 'react'
import {Routes, Route, Link} from "react-router-dom";
import { Themeprovider } from './context/ThemeContext';

import './App.css';
import Pocket from './routes/Pocket';
import Portfolio from './routes/Portfolio';
import Home from './Component/Home';



function App() {
  
  return <Themeprovider>
      <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/pocket" element={<Pocket />} />
       <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

  </Themeprovider>

}

export default App;
