import axios from 'axios'
import React, {useEffect} from 'react'
import { reducerCases } from '../utils/Constants'
import { useStateProvider } from '../utils/StateProvider'
import Body from './body'
import Footer from './footer'
import Navbar from './navbar'
import Sidebar from './sidebar'
import './spotify.css'

export default function Spotify() {

    const [{ token }, dispatch] = useStateProvider();

    useEffect(()=> {
        const getUserInfo = async () => {
            const { data } = await axios.get("https://api.spotify.com/v1/me", 
            {
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-Type" : "application/json",
                   }
            });
            const userInfo = {
                userId: data.id,
                userName: data.display_name,
            };
            dispatch({ type: reducerCases.SET_USER, userInfo})
        };
        getUserInfo();
    }, [dispatch, token]);

  return (
    <div className='main-body'>
        <div className='spotify-body'>
            <Sidebar/>
            <div className='body'>
                <Navbar/>
                <div className='body__contents'>
                    <Body/>
                </div>
            </div>
        </div>
        <div className='spotify__footer'>
            <Footer/>
        </div>
    </div>
  )
}
