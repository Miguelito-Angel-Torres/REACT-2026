import React, { useState, useEffect } from 'react';
import SongLyric from './SongLyric'; 
import SongArtist from './SongArtist';
import Message from '../CRUD_API/Message';

const SongDetails = ({lyric,bio,search}) => {
  if(!lyric || !bio) return null;

  return (
    <>
        <h2>Detalles</h2>
        {lyric.error || lyric.err || lyric.name === "AbortError"? <Message msg={`Error: No existe la Cancion:<em>${search.song}</em>`}
        bgColor="#dc3545"></Message>:
         <SongLyric title={search.song} lyric={lyric.lyrics} ></SongLyric>}
        {bio.artists?<SongArtist artists={bio.artists[0]} ></SongArtist>:
        <Message msg={`Error: No existe el interprete:${search.artists}`}
        bgColor="#dc3545"></Message> } 
    </>
    
  )
}

export default SongDetails