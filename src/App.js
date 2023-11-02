import React from 'react';
import './App.css';
// Imports Navigation bar component
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Imports all the pages
import About from './pages/about';
import Home from './pages/home';
import Clients from './pages/clients';


function App() {
// Where the user get's routed to different pages
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Sends you to PVL-Media*/}
        <Route path='/home' element={<Home />} />
        {/* Sends you to About Us */}
        <Route path='/about' element={<About />} />
        {/* Sends you to Our Clients */}
        <Route path='/clients' element={<Clients />} />
      </Routes>
    </Router>
  );
}

export default App;
