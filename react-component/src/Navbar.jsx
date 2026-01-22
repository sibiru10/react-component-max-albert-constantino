import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        {/* CHANGE THIS LINK 👇 */}
        <li><a href="#contact">Contact</a></li> 
      </ul>
    </nav>
  );
};

export default Navbar;