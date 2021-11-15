import React from 'react'
import { Link } from 'react-router-dom';

import '../css/header.css'


import InstagramIcon from '../assets/Buttons/insta.png';
import AboutMeIcon from '../assets/Buttons/aboutMe.png';
import youtybeIcon from '../assets/Buttons/youtube.png';

import logo from '../assets/Buttons/Logo.png';


function Header() {
    return (
        <div>
            <div id='header'>
                <Link to="/" style={{ textDecoration: 'none' }}><h1>Jackameen</h1></Link>
                <div id='handles'>
                    <a href='https://www.instagram.com/jackameen/' target="_blank"><img id='img' src={InstagramIcon} width='23px' height='23px'/></a>
                    <a href='https://www.youtube.com/c/JackAmeen/featured' target="_blank"><img id='img' src={youtybeIcon} width='30px' height='30px'/></a>
                </div>
            </div>
        </div>
    )
}

export default Header
