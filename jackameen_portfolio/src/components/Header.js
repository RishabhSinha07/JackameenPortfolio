import React from 'react'

import './header.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LoyaltySharpIcon from '@mui/icons-material/LoyaltySharp';

function Header() {
    return (
        <div id='header'>
            <div id='diaplayname'>
                Jackameen
            </div>
            <div id='handles'>
                <a href='#'><FacebookIcon/></a>
                <a href='#'><InstagramIcon/></a>
                <a href='#'><TwitterIcon/></a>
                <a href='#'><LoyaltySharpIcon/></a>
            </div>
        </div>
    )
}

export default Header
