import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <h1 className='header__logo'>e-commerce</h1>
      </NavLink>
      <nav className="header_nav">
        <ul className="header_list">
          <li className="header_item"><NavLink className='header_link' to='/login' >Login</NavLink></li>
          <li className="header_item"><NavLink className='header_link' to='/purchases' >Purchases</NavLink></li>
          <li className="header_item"><h2 className='header_link'>Cart</h2></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header 