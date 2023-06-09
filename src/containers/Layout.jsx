import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/App.css'
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className='body bg-white-800'>
      <NavBar />
      { children }
      <Footer />
    </div>
  );
}

export default Layout;
