import React, { useEffect, useState } from 'react'
import ArtistList from './ArtistList';

function Artists() {
  return (
    <>
    <div className="container">
      <div className="artists">
        <ArtistList/>
      </div>
    </div>
    </>
  )
}

export default Artists