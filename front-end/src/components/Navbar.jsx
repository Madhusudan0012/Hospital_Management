/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <img src={assets.logo} alt="Logo" />
      <ul>
        <NavLink>
          <li>Home</li>
        </NavLink>
        <hr/>
        <NavLink>
          <li>All Doctors</li>
        </NavLink>
        <hr/>
        <NavLink >
          <li>About</li>
        </NavLink>
        <hr/>
        <NavLink >
          <li>Contact</li>
        </NavLink>
      </ul>
      <div>
        <button> Create Account </button>
      </div>
    </div>
  )
}

export default Navbar
