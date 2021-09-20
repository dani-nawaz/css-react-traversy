import React from 'react'
import StorageIcon from '@material-ui/icons/Storage'
import CountUp from 'react-countup'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import AccountTreeIcon from '@material-ui/icons/AccountTree'

export const Stats = () => {
  return (
    <section className='stats'>
      <div className='container'>
        <h3 className='stats-heading text-center my-1'>
          Welcome to the best platform for building applications of all types
          with modern architecture and scaling
        </h3>
        <div className='grid grid-3 text-center my-4'>
          <div>
            <StorageIcon className='svg_icons' />
            <h3>
              <CountUp end={10349405} />
            </h3>
            <p>Deployments</p>
          </div>
          <div>
            <CloudUploadIcon className='svg_icons' />
            <h3>
              <CountUp end={987} /> TB
            </h3>
            <p>published</p>
          </div>
          <div>
            <AccountTreeIcon className='svg_icons' />
            <h3>
              <CountUp end={2343265} />
            </h3>
            <p>Projects</p>
          </div>
        </div>
      </div>
    </section>
  )
}
