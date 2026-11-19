import React from 'react'
import SongDetails from './SongDetails'
import { useParams } from 'react-router-dom'

function SongPage({mySongs}) {
    let {id} = useParams();

    let currentSong = mySongs[id];
    let {search,lyric,bio} = currentSong
    

  return (
    <SongDetails search={search} lyric={lyric} bio={bio}></SongDetails>
    
  )
}

export default SongPage