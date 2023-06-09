import React from 'react'
import Skill from '../components/Skill'

export default function Skills () {

  const logos = ["logo-html5", "logo-css3", "logo-javascript", "logo-react", "logo-nodejs","logo-sass", "logo-firebase", "logo-buffer"];
  const titulos = ["HTML", "CSS", "Javascript", "React", "Nodejs", "SASS", "Firebase", "SQL"];

  return ( 
    <section className='flex flex-col flex-wrap w-auto'>
      <h2 className='text-center font-bold text-xl my-5'>Estos son mis conocimientos y habilidades</h2>
      <Skill logos={logos} titulos={titulos}/>
    </section>
  )
}
