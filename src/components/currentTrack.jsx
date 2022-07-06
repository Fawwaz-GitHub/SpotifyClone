import React,{useEffect} from 'react'
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios'
import { reducerCases } from '../utils/Constants';
import './footer.css'

export default function CurrentTrack() {

    const [{ token, currentPlaying }, dispatch] = useStateProvider();

    useEffect(()=> {
        const getCurrentTrack = async () => {
            const response = await axios.get(
              'https://api.spotify.com/v1/me/player/currently-playing ',
            {
               headers: {
                Authorization : `Bearer ${token}`,
                "Content-Type" : "application/json",
               }
            }
            );
            
            if(response.data !== "") {
                const { item } = response.data;
                const currentPlaying = {
                    id: item.id,
                    name: item.name,
                    artists: item.artists.map((artists)=> artists.name),
                    image: item.album.images[2].url,
                }
            dispatch({ type: reducerCases.SET_PLAYING, currentPlaying })
            }
        }
        getCurrentTrack();
    }, [token, dispatch])

  return <div className="currently-playing">
    {
        currentPlaying && (
            <div className="current-track">
                <div className="current-track-image">
                    <img src={currentPlaying.image} alt="CurrentPlaying"/>
                </div>
                <div className="current-track-info">
                    <h4>{currentPlaying.name}</h4>
                    <h6>{currentPlaying.artists.join(", ")}</h6>
                </div>
            </div>
        )
    }
  </div>
}
