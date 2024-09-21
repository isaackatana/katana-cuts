import { useEffect, useState } from "react";

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
          <h3>
            {artist.name}
          </h3>
      </div>
    ))}
    </>
  )
}

export default ArtistList