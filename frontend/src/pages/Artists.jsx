import React, { useEffect, useState } from 'react'
import ArtistList from './ArtistList';
import { FaSearch } from 'react-icons/fa';

function Artists() {
  return (
    <>
    <div className="container">
      <div className='search-artist'>
        <input type="text" placeholder='Search Artist'/>
        <FaSearch/>
      </div>
      <div className="artists">
        <ArtistList/>
      </div>
    </div>
    </>
  )
}

export default Artists