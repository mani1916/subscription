import logo from './logo.svg';
import './App.css';
import Nav from "./component/Nav";
import Home from "./component/Home";
import { Routes,Route } from 'react-router-dom';
import Articles from './component/Articles';
// import './component/Nav'from 'react';
import '../src/index.css'
import { useState } from 'react';
import Myarticles from './component/Myarticles';
function App() {
 
  
  ;
  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/articles' element={<Articles />}/>
        <Route path='/myarticles' element={<Myarticles/>}/>

        </Routes>
  );
}

export default App;
