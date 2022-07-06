import React from 'react'
import './spotify.css'
import { IoLibrary } from 'react-icons/io5'
import { MdHomeFilled, MdSearch} from 'react-icons/md'
import Playlists from './playlists'

export default function Sidebar() {
  return (
    <div className='sidebar-body'>
        <div className='top-links'>
            <div className='logo'>
                <img className='sidebar-img' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="Spotify" />
            </div>
        <ul className='sidebar-ul'>
            <li><MdHomeFilled/><span>Home</span></li>
            <li><MdSearch/><span>Search</span></li>
            <li><IoLibrary/><span>Your Library</span></li>
        </ul>
    </div>
    <Playlists/>
    </div>
  )
}
