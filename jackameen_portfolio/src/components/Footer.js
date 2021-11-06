import React from 'react'

import './footer.css'
import 'animate.css';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

function Footer() {
    return (
        <div id='footer'>
            <div id='audio_controls'>
                <div id = 'lofi' class="animate__animated animate__heartBeat"><PlayArrowIcon/></div>
                <div id = 'lofi' class="animate__animated animate__heartBeat"><PauseIcon/></div>
                <div id = 'lofi' class="animate__animated animate__heartBeat"><SkipNextIcon/></div>
                <div id = 'lofi' class="animate__animated animate__heartBeat"><SkipPreviousIcon/></div>
            </div>
        </div>
    )
}


export default Footer
