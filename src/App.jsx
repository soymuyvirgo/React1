import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />   
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;