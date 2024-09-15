import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <header>
        <div className="logo">
            <img src="/src/assets/third-world-music(jpg).jpeg" alt="" />
        </div>
        <nav>
            <ul>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/artists'>Artists</NavLink>
                <NavLink to='/shop'>Shop</NavLink >
                <NavLink to='/about'>About</NavLink>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header