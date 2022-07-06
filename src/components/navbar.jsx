import React from 'react'
import './spotify.css'
import { FaSearch } from "react-icons/fa"
import { CgProfile } from 'react-icons/cg'
import { useStateProvider } from '../utils/StateProvider'

export default function Navbar({navBackground}) {

  const [{ userInfo }] = useStateProvider();

  const navStyle = {
    backgroundColor : "rgba(0,0,0,0.7)",
  }

  return (
    <div className='navbar-body' style={navStyle}>
      <div className="search-bar">
        <FaSearch/>
        <input className='search-bar-input' type="text" placeholder='Artists, Songs Or Podcasts' />
      </div>
      <div className='avatar'>
        <a href='#' className='account-link'>
          <CgProfile/>
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </div>
  )
}
