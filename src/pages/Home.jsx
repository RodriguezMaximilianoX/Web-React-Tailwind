import React from 'react';
import homeBanner from '../assets/banner.png'
import '../styles/App.css'

const Home = () => {
  return (
    <section id='Home' className=''>
      <h1 className='font-bold text-center m-2 text-xl '>
        Rmx Desarrollador Web
      </h1>
      <img src={homeBanner} alt='Home Banner' className='w-screen py-5 lg:w-1/2 lg:mx-auto ' />
      <article className='mx-3 text-center text-lg'>
        <p>
          Soy desarrollador web fullstack con experciencia en el stack MERN (MongoDB, Express, React, NodeJs). Cuento con experiencia creando Landing Page y tambien E-commerce
        </p>
        <p>
          Te invito a que nos pongamos en contacto para poder transformar tus ideas en una realidad.
        </p>
      </article>
    </section>
  );
}

export default Home;
