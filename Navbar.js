import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-title">
        <img 
          src="https://previews.123rf.com/images/in8finity/in8finity1405/in8finity140500127/28294504-euro-money-icon-with-bag-on-black-background-vector-illustration.jpg" 
          alt="Logo" 
          className="logo" 
        />
        <h1 className="title">Expense Tracker</h1>
      </div>
      <div className="nav-links">
        <Link to="/">
          <i className="fas fa-home"></i> Home
        </Link>
        <Link to="/about">
          <i className="fas fa-info-circle"></i> About Us
        </Link>
        <Link to="/contact">
          <i className="fas fa-envelope"></i> Contact
        </Link>
        <Link to="/auth">
          <i className="fas fa-sign-in-alt"></i> Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
