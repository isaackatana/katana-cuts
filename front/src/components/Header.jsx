import React from 'react'
import { NavLink } from 'react-router-dom'

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
        <div className="logo">
            <img src="/src/assets/third-world-music.png" alt="" />
        </div>
    </header>
    </>
  )
}

export default Header 