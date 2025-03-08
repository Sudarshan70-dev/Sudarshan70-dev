import logo from './logo.svg';
import React from "react";
import './index.css';
import {Route , Routes} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/contact" element = {<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
