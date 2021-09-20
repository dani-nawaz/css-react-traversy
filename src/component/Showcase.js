import React from 'react'

export const Showcase = () => {
  return (
    <section className='showcase'>
      <div className='container grid'>
        <div className='showcase-text'>
          <h1>Easier Deployement</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim esse
            quisquam ea nam amet voluptate cumque voluptas tempora, sit beatae
            odit eos maxime! Doloribus rerum placeat nesciunt, saepe natus
            maxime!
          </p>
          <a href='/features' class='btn btn-outline'>
            Read More
          </a>
        </div>
        <div className='showcase-form card'>
          <h2>Request Demo</h2>
          <form>
            <div className='form-control'>
              <input type='text' name='name' placeholder='Name' required />
            </div>
            <div className='form-control'>
              <input type='text' name='email' placeholder='Email' required />
            </div>
            <div className='form-control'>
              <input
                type='text'
                name='company'
                placeholder='Company'
                required
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
