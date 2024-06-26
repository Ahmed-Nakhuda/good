import './App.css';
import React from 'react';
import Home from './components/home';
import Men from './components/men';
import Women from './components/women';
import Kids from './components/kids';
import Cart from './components/cart';
import Checkout from './components/checkout';
import Confirmation from './components/confirmation';
import { Routes, Route, NavLink } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";

function App() {
  return (
    <div>
      <div className='navbar'>
        <NavLink to='/' className='navLink'>Home</NavLink>
        <NavLink to='/men' className='navLink checkoutLink'>Men</NavLink>
        <NavLink to='/women' className='navLink checkoutLink'>Women</NavLink>
        <NavLink to='/kids' className='navLink checkoutLink'>Kids</NavLink>
        <NavLink to='/cart' className='navLink checkoutLink'><IoBagCheckOutline /></NavLink>
      </div>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='confirmation' element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
