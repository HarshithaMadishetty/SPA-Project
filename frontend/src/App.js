
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
