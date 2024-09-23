import { useEffect, useState } from "react";
import { FaInstagram, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";

import DBerry from './images/Dberry1.jpg'
import AdamLeenz from './images/AdamLeenz2.jpg'
import DonnJ from './images/DonnJ1.jpg'
import DrugBeats from './images/DonnJ1.jpg'

function ArtistList() {
  // const [artists, setArtists] = useState([]);

  //   useEffect(() => {
  //       fetch('/api/artists')
  //       .then((response) => response.json())
  //       .then((data) => setArtists(data))
  //       .catch((error) => console.error('Error fetching artists:', error));
  //   }, []);

  const artists = [
    
    {
      id: 1,
      image: `${DonnJ}`,
      name: 'Donn-J',
    },
    {
      id: 2,
      image: `${AdamLeenz}`,
      name: 'Adam Leenz',
    },
    {
      id: 3,
      image: `${DBerry}`,
      name: 'D-Berry',
    },
    {
      id: 4,
      image: `${DrugBeats}`,
      name: 'Drug Beats',
    },
  ];

  return (
    <>
    {artists.map((artist, index) => (
      <div className="wrapper" key={artist.id}>
          <img src={artist.image} alt="" />
          <h3>
            {artist.name}
          </h3>
          <div className="social-media">
            <a href="" target=""></a>
            <FaInstagram/>
            <FaYoutube/>
            <FaSpotify/>
            <FaTiktok/>
          </div>
      </div>
    ))}
    </>
  )
}

export default ArtistList