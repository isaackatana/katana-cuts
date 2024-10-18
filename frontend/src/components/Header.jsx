import React from 'react'
import { FaInstagram, FaSpotify, FaTiktok, FaYoutube } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <header>
        <nav>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/store'>Store</NavLink >
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </ul>
        </nav>
        <Link to='/'>
          <div className="logo">
              <img src="/katana-cuts.svg" alt="" />
          </div>
        </Link>
        <section>
          <div className="social-links">
            <FaInstagram/>
            <FaYoutube/>
            <FaSpotify/>
            <FaTiktok/>
          </div>
        </section>
    </header>
    </>
  )
}

export default Header 