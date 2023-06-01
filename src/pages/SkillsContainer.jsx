import React from 'react'
import Skill from '../components/Skill'

export default function Skills () {

  const logos = ["logo-html5", "logo-css3", "logo-javascript", "logo-react", "logo-nodejs"];
  const titulos = ["HTML", "CSS", "Javascript", "React", "Nodejs"];

  return ( 
    <section>
      <h2 className='my-4 text-center font-bold'>Estos son mis conocimientos y habilidades</h2>
      <Skill logos={logos} titulos={titulos}/>
    </section>
  )
}
