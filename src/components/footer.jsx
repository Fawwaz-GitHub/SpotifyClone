import React from 'react'
import './spotify.css'
import CurrentTrack from './currentTrack'
import PlayerControls from './playerControls'
import Volume from './volume'

export default function Footer() {
  return (
    <div className='footer-body'>
      <CurrentTrack/>
      <PlayerControls/> 
      <Volume/> 
    </div>
  )
}
