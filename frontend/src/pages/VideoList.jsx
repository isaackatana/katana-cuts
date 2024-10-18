import React from 'react'

const lyricsVisualizers = [
    {
        url: "https://www.youtube.com/embed/YI3vEw3Xzwo?si=9ThIIZMKH-jqfxI7"
    },
    {
        url: "https://www.youtube.com/embed/YHESmYsFkrE?si=qcm2F5Io0HCUDXQc"
    },
    {
        url: "https://www.youtube.com/embed/LxcmF_Kk0Ho?si=zrj-7KrPSRcVYsm_"
    },
    {
        url: "https://www.youtube.com/embed/VyVVl_d2yZI?si=isaFRqOVs9blEZIN"
    },
]

function VideoList() {
  return (
    <>
    {lyricsVisualizers.map((Visualizer, index)=>(
        <div className="wrapper">
            <iframe src={Visualizer.url} frameborder="0"></iframe>
        </div>
    ))}
    </>
  )
}

export default VideoList