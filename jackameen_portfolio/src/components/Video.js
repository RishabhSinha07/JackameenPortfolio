import React from 'react'

import './video.css'

import backgroundvideo from '../assets/vid-01.mp4'


function Video() {
    return (
        <video autoPlay loop muted id='backgroundvideo'>
            <source src={backgroundvideo} type='video/mp4'/>
        </video>
    )
}

export default Video
