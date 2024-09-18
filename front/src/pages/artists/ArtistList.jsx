
function ArtistList({artists}) {
  return (
    <>
    {artists.map((artist, index) => (
        <div className="wrapper" key={index}>
            <img src={artist.image} alt="" />
            <div className='info'>{artist.name}</div>
        </div>
    ))}
    </>
  )
}

export default ArtistList