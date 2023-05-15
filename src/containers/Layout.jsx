import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/Layout/Layout.css'

const Layout = ({ children }) => {
  return (
    <div className='body'>
      <NavBar />
      { children }
    </div>
  );
}

export default Layout;
