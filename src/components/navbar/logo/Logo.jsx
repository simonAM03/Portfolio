import React from 'react'
import cloud from '@svg/cloud.svg'
import './Logo.css'

const Logo = () => {
  return (
    <a className='logo' href='/'> 
      <img className='may' src={cloud} alt="clould" />
      <div className='order'>Order</div>
    </a>
  )
}

export default Logo