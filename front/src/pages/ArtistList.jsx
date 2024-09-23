import { useEffect, useState } from "react";
import { FaInstagram, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";

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
      image: 'https://scontent-mba1-1.cdninstagram.com/v/t51.29350-15/346517749_159065267132688_2945527045101240480_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-mba1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=vYMhNLKj0pkQ7kNvgEWLoUy&_nc_gid=f9efda85940a42beaf4c95c8a659a419&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzEwMTg0NDM1ODUxMTU0MzYyMg%3D%3D.3-ccb7-5&oh=00_AYDVWDhbg4MePfp-DtYMb-kdLLlxLNs7LKZMRkJqkOXdTQ&oe=66F64B1F&_nc_sid=22de04',
      name: 'D-Berry',
    },
    {
      id: 2,
      image: '',
      name: 'Adam Leenz',
    },
    {
      id: 3,
      image: '',
      name: 'Donn-J',
    },
    {
      id: 4,
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