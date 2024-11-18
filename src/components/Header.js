import React from 'react'
import Logo from '../assets/logo.svg'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt='' className='logo'/>
      <h1>HealthCare Records</h1>
      <ul>
        <li>Home</li>
        <li>Login</li>
      </ul>
    </div>
  )
}

export default Header
