import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Cart from './Cart';
import './Header.css'

const Header = () => {
  const [ isCartOpen, setIsCartOpen ] = useState(false);
  const navigate = useNavigate();

  const onOpenCartClick = (e) => {
    console.log("display cart");
    setIsCartOpen(true);
    // if (sessionStorage.getItem("token")) {
    //   setIsCartOpen(!isCartOpen);
    // } else {
    //   navigate("/login");
    // }
  };

  return (
    <header className='header'>
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
              <i className="fa-solid fa-user"></i>
            </NavLink>
          </li>
          <li className="header_item icon">
            <NavLink className="" to="/purchases">
              <i className="fa-solid fa-box-archive"></i>
            </NavLink>
          </li>
          <li className="header_item icon">
            <div onClick={onOpenCartClick}>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </li>
        </ul>
      </nav>
      <div className={`cart-modal ${isCartOpen ? 'open' : ''}`}>
        <Cart handleClose={() => setIsCartOpen(false)} />
      </div>
      { isCartOpen && 
        <div className='overlay' onClick={() => setIsCartOpen(false)}></div>
      }
    </header>
  );
};

export default Header;
