import React from 'react'

import '../css/video.css'

import video1 from '../assets/BackGroundVideos/vid-01.mp4'
import video2 from '../assets/BackGroundVideos/vid-02.mp4'
import video3 from '../assets/BackGroundVideos/vid-03.mp4'
import video4 from '../assets/BackGroundVideos/vid-04.mp4'

function Video() {
    return (
        <div>
            <video autoPlay loop muted id='backgroundvideo'>
                <source src={video4} type='video/mp4'/>
            </video>
        </div>
    )
}

export default Video
