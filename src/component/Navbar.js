import React from 'react'
import { navLinks } from './navdata'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container flex'>
        <h1>Loroki.</h1>
        <nav>
          <ul>
            {navLinks.map((link) => {
              const { text, id, url } = link
              return (
                <li key={id}>
                  {' '}
                  <a href={url}> {text}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}
