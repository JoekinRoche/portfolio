
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Works from './components/Works';
import Courses from './components/Courses';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
