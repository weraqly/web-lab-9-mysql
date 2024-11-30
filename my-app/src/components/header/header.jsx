import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = ({ onSearch }) => {
  const location = useLocation();
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <header>
      <h1>Mountain Equipment</h1>
      <nav id='idish'>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      
      {location.pathname === '/catalog' && (
        <input
          type="search"
          id="find_input"
          placeholder="Search equipment"
          onChange={handleSearchChange} 
        />
      )}
    </header>
  );
};

export default Header;
