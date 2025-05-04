import React from 'react'
import Navbar from './navbar';
import { Outlet } from 'react-router-dom';
import Footer from './footer';

const Body = () => {
  return (
    <div>
      <Navbar/>
      <Outlet>
        {/* This is where the child routes will be rendered */}   
      </Outlet>
      <Footer />
    </div>
  )
}

export default Body;
