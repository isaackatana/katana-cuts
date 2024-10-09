import React from 'react'

function ArtistInfo({artists}) {
  return (
    <div>
        <h1>{artist.name}</h1>
        <p>{artist.details}</p>
    </div>
  )
}

export default ArtistInfo