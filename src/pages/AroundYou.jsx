import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useSelector} from'react-redux';
import {Error,Loader, SongCard} from '../components';

const AroundYou = () =>{ 
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const {activeSong,isPlaying} = useSelector((state) => state.player);

    useEffect(() => {
        //api geo.ipify : 
        // at_TcqHdpRSgbK1MpnbcX80XzBBRyTLq
    }, [country]);
    
    return(
        <div>CountryTracks</div>
    )
    };

export default CountryTracks;
