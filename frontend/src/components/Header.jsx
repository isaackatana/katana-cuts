import React from 'react'
import { FaInstagram, FaSpotify, FaTiktok, FaYoutube } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

import Logo from '../assets/logo.png'

function Header() {
  return (
    <>
    <header>
        <section>
          <Link to='/'>
            <img src={Logo} alt="" />
          </Link>
        </section>
        <nav>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/store'>Store</NavLink >
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header 