import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './views/Home';
import AboutUs from './views/AboutUs';
import ContactUs from './views/ContactUs';


function App() {
  return (
   <>
    <div>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Navbar />
      <Footer />  
    </div>
   </>
  );
};

export default App;
