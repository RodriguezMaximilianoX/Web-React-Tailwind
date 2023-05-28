import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/App.css'

const Layout = ({ children }) => {
  return (
    <div className='body bg-white-800'>
      <NavBar />
      { children }
    </div>
  );
}

export default Layout;
