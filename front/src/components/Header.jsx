import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <header>
        <nav>
            <ul>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/artists'>Artists</NavLink>
                <NavLink to='/shop'>Shop</NavLink >
                <NavLink to='/about'>About</NavLink>
            </ul>
        </nav>
        <Link to='/home'>
          <div className="logo">
              <img src="../third-world-music.png" alt="" />
          </div>
        </Link>
    </header>
    </>
  )
}

export default Header 