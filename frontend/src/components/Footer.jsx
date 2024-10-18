import React from 'react'
import { FaInstagram, FaSpotify, FaTiktok, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <>
    <footer>
      <div className="social-links">
        <FaInstagram/>
        <FaYoutube/>
        <FaSpotify/>
        <FaTiktok/>
      </div>
      <p>© 2024 Katana Cuts LLC. All Rights Reserved.</p>
    </footer>
    </>
  )
}

export default Footer