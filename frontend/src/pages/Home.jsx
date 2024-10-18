import React from 'react'
import VideoList from './VideoList'

function Home() {
  return (
    <>
    <div className="home">
    <div className="latest-videos">
      <div className="container">
        <VideoList/>
      </div>
    </div>
    <iframe src="https://open.spotify.com/embed/playlist/1mj0UNmFo1m9c96TN3s4K5?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    </>
  )
}

export default Home