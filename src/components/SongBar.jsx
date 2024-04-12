<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

import PlayPause from "./PlayPause";

const SongBar = ({
  song,
  i,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div
    className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${
      activeSong?.title === song?.title ? "bg-[#4c426e]" : "bg-transparent"
    } py-2 p-4 rounded-lg cursor-pointer mb-2`}
  >
=======
import React from 'react';
import { Link } from 'react-router-dom';

import PlayPause from './PlayPause';

const SongBar = ({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
>>>>>>> dd27379c5e2f150359d91e4c8f2f2d85160258b3
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
<<<<<<< HEAD
        src={
          artistId
            ? song?.attributes?.artwork?.url
                .replace("{w}", "125")
                .replace("{h}", "125")
            : song?.images?.coverart
        }
=======
        src={artistId ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') : song?.images?.coverart}
>>>>>>> dd27379c5e2f150359d91e4c8f2f2d85160258b3
        alt={song?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        {!artistId ? (
          <Link to={`/songs/${song.key}`}>
<<<<<<< HEAD
            <p className="text-xl font-bold text-white">{song?.title}</p>
=======
            <p className="text-xl font-bold text-white">
              {song?.title}
            </p>
>>>>>>> dd27379c5e2f150359d91e4c8f2f2d85160258b3
          </Link>
        ) : (
          <p className="text-xl font-bold text-white">
            {song?.attributes?.name}
          </p>
        )}
        <p className="text-base text-gray-300 mt-1">
          {artistId ? song?.attributes?.albumName : song?.subtitle}
        </p>
      </div>
    </div>
<<<<<<< HEAD
    {!artistId ? (
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, i)}
      />
    ) : null}
  </div>
);

export default SongBar;
=======
    {!artistId
      ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, i)}
        />
      )
      : null}
  </div>
);

export default SongBar;
>>>>>>> dd27379c5e2f150359d91e4c8f2f2d85160258b3
