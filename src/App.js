import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup';
import Login from './pages/login';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
