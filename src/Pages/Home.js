import React from 'react'
import Cli from '../component/Cli'
import { Navbar } from '../component/Navbar'
import { Showcase } from '../component/Showcase'
import { Stats } from '../component/Stats'
import { Cloud } from '../component/Cloud'
import Languages from '../component/Languages'

const Home = () => {
  return (
    <>
      <Navbar />
      <Showcase />
      <Stats />
      <Cli />
      <Cloud />
      <Languages />

      <footer className='footer bg-dark py5'>
        <Navbar />
      </footer>
    </>
  )
}

export default Home
