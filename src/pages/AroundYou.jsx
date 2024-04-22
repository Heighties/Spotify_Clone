import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useSelector} from'react-redux';
import {Error,Loader, SongCard} from '../components';

const AroundYou = () =>{ 
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const {activeSong,isPlaying} = useSelector((state) => state.player);

    console.log(country)

    useEffect(() => {
        //api key geo.ipify : 
        // at_TcqHdpRSgbK1MpnbcX80XzBBRyTLq
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_TcqHdpRSgbK1MpnbcX80XzBBRyTLq`)
        .then((res) => setCountry(res?.data?.location?.country))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, [country]);
    
    return(
        <div/>
    )
    };

export default AroundYou;
