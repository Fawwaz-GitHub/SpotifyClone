import React from 'react'
import { useStateProvider } from '../utils/StateProvider'
import './footer.css'
import axios from 'axios';

export default function Volume() {

    const [{token}] = useStateProvider();
    const setVolume = async (e) => {
        await axios.put(
            `https://api.spotify.com/v1/me/player/volume`,{},
          {
             params: {
                volume_percent: parseInt(e.target.value)
             },
             headers: {
              Authorization : `Bearer ${token}`,
              "Content-Type" : "application/json",
             }
          }
          );
    }

  return (
    <div className='volume-body'>
        <input className='volume-input' type="range" min={0} max={100} onMouseUp={(e=>setVolume(e))}/>
    </div>
  )
}
