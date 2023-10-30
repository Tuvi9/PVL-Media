import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Clients from './pages/clients';


function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/clients' element={<Clients />} />
      </Routes>
    </Router>
  );
}

export default App;
