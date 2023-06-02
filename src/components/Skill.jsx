import React from 'react'

export default function Skill(props) {

  const { logos, titulos } = props

  return (
    <div className='flex justify-around flex-wrap aling-center'>
      {logos.map((logo, index) => (
        <div className='flex flex-col items-center justify-around m-2'>
          <ion-icon name={logo} size="large" key={index}></ion-icon>
          <h3 className='font-bold'>{titulos[index]}</h3>
        </div>
      ))}
    </div>
  )
}
