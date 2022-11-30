import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<>
            <Navbar />
            <Home />
            <Skills />
          </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
