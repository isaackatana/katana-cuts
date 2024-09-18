import React, { useEffect, useState } from 'react'
import ArtistList from './ArtistList';

function Artists() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the list of artists from the backend server
  useEffect(() => {
    fetch('http://localhost:3000/artists') // Replace with your backend URL
      .then(response => response.json())
      .then(data => {
        setArtists(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the artists:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="container">
      <div className="artists">
        <ArtistList artists={artists}/>
      </div>
    </div>
    </>
  )
}

export default Artists