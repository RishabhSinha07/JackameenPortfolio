import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';

import '../css/card.css'

function Card(props) {
    const video_tit = props.video_title;
    const descriptn = props.video_decrp;
    const thumbnail = props.video_thumb;
    const video_url = props.video_url;

    return (
        <div>
            <div className='container'>
                <div className='thumbnail'><img id='image' src={thumbnail}/></div>
                <div className='card'>
                    <div className='content'>
                    <div id='title'>{video_tit}</div>
                    <div id='description'>{descriptn}</div>
                    <div id='link'><a href={video_url} target="_blank"><YouTubeIcon/></a></div>
                </div>
                </div>
            </div>
            <div className='mobileContainer'>
                <div className='mobileCard'>
                <div id='mobiletitle'>{video_tit}</div>
                <div className='mobile_thumbnail'><img id='mobile_image' src={thumbnail}/></div>
                <div id='mobilelink'><a href={video_url} target="_blank"><YouTubeIcon/></a></div>
                </div>
            </div>
        </div>
        
    )
}

export default Card