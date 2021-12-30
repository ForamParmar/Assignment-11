import './App.css';
import React from 'react';
import LoginLink from './components/LoginLink';
import Rform from './components/Rform';
import Homepage from './components/Homepage';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'

function App() {
  
  return ( 
      <Router>
        <Routes>
          <Route exact path="/" element={<Rform />}></Route>
          <Route exact path="/login" element={<LoginLink />}></Route>
          <Route exact path="/home" element={<Homepage />}>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
