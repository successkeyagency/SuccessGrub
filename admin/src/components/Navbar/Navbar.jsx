import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="Logo" />
      <div className="navbar-right">
        <div className="greeting">Admin</div>
        <img className='profile' src={assets.profile} alt="Profile" />
      </div>
    </div>
  )
}

export default Navbar
