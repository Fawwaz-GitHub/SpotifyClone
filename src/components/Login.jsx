import React from 'react'
import './login.css'

function Login() {

  const handleClick = () => {
    const clientId = "895b2cfa25f1460cb8bcfd7ff62a7976";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  }

  return (
    <div className='container'>
      <img className='image' src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' alt='spotify' />
      <button className='btn' onClick={handleClick}>Connect Spotify</button>
    </div>
  )
}

export default Login

