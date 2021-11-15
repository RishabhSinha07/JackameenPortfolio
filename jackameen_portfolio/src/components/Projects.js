import React from 'react'
import { useState, useEffect } from 'react';
import 'animate.css';

import Card from './Card';

import '../css/projects.css'

const channel_id = "UCbKJVB_ZXdLxFz91Z-oALsQ"
const api_key = "AIzaSyAbNkUoav-Cxo95bEOrE7SDpNFYT92s8Jo"
const base_search_url = 'https://www.googleapis.com/youtube/v3/search?'

function Projects() {

    const [data, setData] = useState([]);
    useEffect(() => {getYouTubeData()}, [])

    function processData(response){
        let data = []
        let items = response.items
        for(let i=0;i<items.length;i++){
            let videoDetails = {}
            if(items[i].id.kind === "youtube#video"){
                videoDetails["video_url"] = `https://www.youtube.com/watch?v=${items[i].id.videoId}`
                videoDetails["video_title"] = items[i].snippet.title
                videoDetails["video_decrp"] = items[i].snippet.description
                videoDetails["video_thumb"] = items[i].snippet.thumbnails.high.url
                data.push(videoDetails)
            }
        }
        return data
    }

    function getYouTubeData(){
        const endpoint = base_search_url + `key=${api_key}&channelId=${channel_id}&part=snippet,id&order=date&maxResults=100`
        fetch(endpoint).then(data => data.json()).then(data => processData(data)).then(data => setData(data))

    };

    return (
        <div id="navigation">
            {data.map(data => {
                console.log(data.video_url);
                return <Card video_title={data.video_title} video_decrp={data.video_decrp} video_thumb={data.video_thumb} video_url={data.video_url}/>
            })}
        </div>
    )
}

export default Projects
