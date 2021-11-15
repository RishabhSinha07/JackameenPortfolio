import React from 'react'
import { Link } from 'react-router-dom';

import '../css/aboutMe.css'

import suitcase from '../assets/Buttons/suitcase.png'
import popcorn from '../assets/Buttons/popcorn.png'
import branch from '../assets/Buttons/branch.png'

import camera1 from '../assets/Buttons/camera1.png'
import camera2 from '../assets/Buttons/camera2.png'
import videoplayer from '../assets/Buttons/video-player.png'

function AboutMe() {
    return (
        <div className='about_me_container'>
            <div className='about_me_content'>
            My name is Maninder Singh Ebenezer AKA Jack Ameen , i am a Film Maker
            I have more than 5 years of experience as a Video Editor, Graphic Designer and VFX Artist in Punjabi Music Industry.
            Worked with many Record Labels such as T-Series,Jass Records, Ting Ling, Velly Zimidar and many more.
            </div>
            <div className='workprofile'>
                <p>Check out my work </p>
                <Link to="/projects"><img className='image' src = {branch}/></Link>
                {/* <button className='button'><img className='image' src = {branch}/></button> */}
            </div>
        </div>
    )
}

export default AboutMe
