import React from 'react'
import { land } from './langData'
import Tilt from 'react-parallax-tilt'
const Languages = () => {
  return (
    <section className='languages'>
      <h2 className='md text-center my-2'>Supported Languages</h2>
      <div className='container flex'>
        {land.map((lang) => {
          const { name, id, image } = lang
          return (
            <Tilt>
              <div key={id} className='card'>
                <div className='content'>
                  <h4>{name}</h4>
                  <img src={image} alt={name} />
                </div>
              </div>
            </Tilt>
          )
        })}
      </div>
    </section>
  )
}

export default Languages
