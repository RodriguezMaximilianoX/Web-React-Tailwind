import React from 'react';
import Banner from '../assets/banner.png'
import '../styles/App.css'

const Home = () => {
  return (
    <section id='Home'>
      <img src={Banner} alt='Home Banner' className='w-screen'/>
      <h1 className='font-bold text-center m-2 text-xl '>Rmx Desarrollador Web</h1>
      <article className='mx-3 text-center'>Aqui tendria que poner un texto resumido sobre quien soy para presentarme y no opacar luego lo que deberia escribir en Sobre mi sino al pedo dos veces lo mismo</article>
    </section>
  );
}

export default Home;
