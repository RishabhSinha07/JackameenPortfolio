import React from 'react'
import {Howl, Howler} from 'howler';
import { useState, useEffect } from 'react';

import '../css/footer.css'
import 'animate.css';

import play from '../assets/Buttons/play.png'
import next from '../assets/Buttons/next.png'
import pause from '../assets/Buttons/pause.png'
import previous from '../assets/Buttons/previous.png'

import audio1 from "../assets/Songs/C Y S 'Can't You See'' _ SLOWED AND REVERBED.mp3"
import audio2 from "../assets/Songs/C Y S Can’t you see _ Jack Ameen .mp3"
import audio3 from "../assets/Songs/Rainy Night..LOFI . _ Night Cinematic video a6300 .mp3"

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const songs = [audio1,audio2,audio3];
var current_song = "";
var current = 0

function Footer() {
    const [sound, setsound] = useState(new Howl({src : [songs[current]],  loop: true}))
    current_song = songs[current].split("/")[4];
    console.log(current_song);
    console.log(songs);

    useEffect(() => {sound.play()}, [sound])
    
    const playNext = () => {
        sound.stop()
        current = (current+1 === songs.length ? 0 : current+1)
        console.log(current)
        var newSound = new Howl({src : [songs[current]], loop: true})
        setsound(newSound);
    }

    const playPrevious = () => {
        sound.stop()
        current = (current-1 === -1 ? songs.length-1 : current-1)
        console.log(current)
        var newSound = new Howl({src : [songs[current]], loop: true})
        setsound(newSound);
    }
    
    return (
        <div id='footer'>
            <div id='audio_controls'>
                <button className="button" onClick={() => {playPrevious()}}><img src={previous} height='40px' width='40px'/></button>
                <button className="button" onClick={() => {sound.play()}}><img src={play} height='25px' width='25px'/></button>
                <button className="button" onClick={() => {sound.pause()}}><img src={pause} height='25px' width='25px'/></button>
                <button className="button" onClick={() => {playNext()}}><img src={next} height='40px' width='40px'/></button>
            </div>
            <div id='song_name'>
                <div id='playing_icon'><PlayCircleOutlineIcon/></div>
                <div id='song_text'>{current_song}</div>
            </div>
        </div>
    )
}


export default Footer