import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/App.css'

export default function Footer() {
  return (
    <section className='inset-x-0 bottom-0 absolute h-32 bg-yellow-400'>
      <h4 className='font-bold py-3 text-xl mx-3'>Nos pongamos en contacto</h4>
      <div className='flex justify-around'>
        <div className='flex flex-col items-center'>
          <ion-icon name="mail" size='large'></ion-icon>
          <Link to="mailto:rodriguezmaximilianoxavier@gmail.com" target='_blank'>Mail</Link>
        </div>
        <div className='flex flex-col items-center'>
          <ion-icon name="logo-linkedin" size='large'></ion-icon>
          <Link to="https://www.linkedin.com/in/rodriguez-maximiliano-xavier/" target='_blank'>LinkedIn</Link>
        </div>
        <div className='flex flex-col items-center'>
          <ion-icon name="logo-github" size='large'></ion-icon>
          <Link to="https://github.com/RodriguezMaximilianoX" target='_blank'>GitHub</Link>
        </div>
      </div>
    </section>
  )
}
