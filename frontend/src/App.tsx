import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import GeneralUserPage from './components/GeneralUserPage';
import Login from './components/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/user" element={<GeneralUserPage/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;
