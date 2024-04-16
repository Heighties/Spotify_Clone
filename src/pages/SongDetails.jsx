import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const SongDetails = () => {
    const { songid } = useParams();
    // const dispatch = useDispatch();
    // const { activeSong, isPlaying } = useSelector((state) => state.player);

    console.log("songid is " + songid);


    return <div>SongDetails</div>
    
    
};

export default SongDetails;
