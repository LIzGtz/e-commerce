import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='header fixed'>
      <nav className="header_nav">
        <ul className="header_list">
          {/* <li className="header_item"><NavLink className={({ isActive }) => isActive && 'active-link' } to='/login' >Login</NavLink></li>
          <li className="header_item"><NavLink className={({ isActive }) => isActive && 'active-link' } to='/purchases' >Purchases</NavLink></li> 
          */}
          <li className="header_title">
            <NavLink to='/'>
              <h1 className='header__logo'>e-commerce</h1>
            </NavLink>
          </li>
          <li className="header_item icon active">
            <NavLink className="" to="/login">
              <i class="fa-solid fa-user"></i>
            </NavLink>
          </li>
          <li className="header_item icon">
            <NavLink className="" to="/purchases">
              <i class="fa-solid fa-box-archive"></i>
            </NavLink>
          </li>
          <li className="header_item icon">
            <NavLink className="" to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
