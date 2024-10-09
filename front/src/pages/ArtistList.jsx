import { useEffect, useState } from "react";
import { FaInstagram, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function ArtistList() {
  const [artists, setArtists] = useState([]);

    useEffect(() => {
        fetch('/api/artists')
        .then((response) => response.json())
        .then((data) => setArtists(data))
        .catch((error) => console.error('Error fetching artists:', error));
    }, []);

  return (
    <>
    {artists.map((artist, index) => (
      <div className="wrapper" key={artist.id}>
          <img src={artist.image} alt="" />
          <Link to='/artists/artist/:slug'><h3>{artist.name}</h3></Link>
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