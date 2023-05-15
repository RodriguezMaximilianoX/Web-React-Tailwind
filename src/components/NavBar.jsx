import React from 'react';
import Logo from '../assets/Logo web.png'
import '../styles/NavBar/NavBar.css'
import Home from '../pages/Home';

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <div className='logo'>
        <img className='logo-img' src={Logo} alt='Logo' />
      </div>
      <ul className='nav'>
        <li className='nav-element'>
          <a href= {<Home />}>Home</a>    
        </li>
        <li className='nav-element'>
          Habilidades
        </li>
        <li className='nav-element'>
          Contacto
        </li>
        <li className='nav-element'>
          Sobre Mi
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
