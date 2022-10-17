import React from 'react';
import "./index.css";
import Auth from "./Auth";
// import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import Home from './Home'
import {Route, Routes} from 'react-router-dom'
import NoMatchPage from './NoMatchPage';

function App() {
  return (
    <>
    <NavBar />
  <Routes>
    <Route path='/' element= {<Home />} />
    <Route path='/cart' element= {<ShoppingCart />} />
    <Route path='/auth' element= {<Auth />} />
    <Route path='*' element= {<NoMatchPage />} />
  </Routes>
    </>
  );
}

export default App;
