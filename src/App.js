import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';

import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects.js';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
