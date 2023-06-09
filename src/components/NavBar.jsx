import React, { useState } from 'react';
import Logo from '../assets/Logo web.png'
import '../styles/App.css'
import Menu from '../assets/menu.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [open, setOpen] = useState(false)

  const Links = [
    {name: "Home", link:"/"},
    {name: "Habilidades", link:"/skills"},
    {name: "Sobre mí", link:"/aboutme"}
  ]

  return (
    <nav className='nav-container flex items-center justify-between bg-blue-700'>
      <div className='logo '>
        <img className='logo-img w-16 m-2 rounded' src={Logo} alt='Logo' />
      </div>
      <ul className={`nav text-lg bg-blue-700 absolute z-10 right-0 w-1/3 text-center ${open ? 'top-16':'hidden'} md:flex md:flex-row md:right-3 md:w-max md:top-3 md:bg-inherit`}>
       {
        Links.map((link) => (
          <>
            <li key={link.name} className='nav-element p-3 hover:text-white hover:bg-blue-500 rounded-xl'>
             <Link to={link.link}>{link.name}</Link>
           </li>
          </>
        ))
       }
      </ul>
      <button className='md:hidden' onClick={() => setOpen(!open)}>
        <img src={Menu} alt='menu-desplegable' className='w-10 h-10 m-2'/>
      </button>
    </nav>    
  );
}

export default NavBar;