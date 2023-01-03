import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import {useState} from 'react';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="login" element={<LogIn/>} />
      <Route path="/*" element={<Home/>} />
    </Routes>
    </div>
  );
}

export default App;
