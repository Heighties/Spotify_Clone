import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const SongDetails = () => {
    const { songid, id: artistId } = useParams();
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);


    return (
        <div>SongDetails</div>
    )
    
};

export default SongDetails;
