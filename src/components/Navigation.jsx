import '../styles/nav.css';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import contact from './Contact.jsx'

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li >
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
