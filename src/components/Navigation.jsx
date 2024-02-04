// import '../styles/nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-black ">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li className='font-bold'>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/location">Location</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navigation;
