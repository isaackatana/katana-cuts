import React from 'react'
import Header from '../components/Header'

function Artists() {

  // Fetch the list of artists
  fetch('http://localhost:3000/api/artists')
  .then(response => response.json())
  .then(artists => {
    console.log('Artists:', artists);
    // Handle the artist data (e.g., render it on the page)
  })
  .catch(error => console.error('Error fetching artists:', error));

  return (
    <>
    <div className="container">
      <div className="artists">
        <div className="wrapper">
          <img src="https://scontent-mba1-1.cdninstagram.com/v/t51.29350-15/455011271_474873641982497_3329977987184308022_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDEuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-mba1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=147eF9kDuOYQ7kNvgHK4-Np&_nc_gid=691ff078d98d4cd3ad023d5ee60cc7de&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzQzMzEzMDY5MzUxNjM5Mzc2Mw%3D%3D.3-ccb7-5&oh=00_AYA5TjIWETHJ5k55T-CKQmi4Ih3cqE86BGNn17BC8dSMpQ&oe=66EC63D3&_nc_sid=8f1549" alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Artists