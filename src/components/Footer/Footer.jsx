// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <p className='footer'>
        All company rights and reserved @ {new Date().getFullYear()} DaleTech
        </p>
    </div>
  )
}

export default Footer

