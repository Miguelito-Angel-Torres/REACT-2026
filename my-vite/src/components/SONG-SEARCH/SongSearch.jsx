import React, { useEffect, useState } from 'react'
import SongForms from './SongForms'
import SongDetails from './SongDetails'
import Loader from '../CRUD_API/Loader'
import { helpHttp } from '../../helpers/helpHttp'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import { Error404 } from '../../pages/Error404'
import SongTable from './SongTable'
import SongPage from './SongPage'
//https://lyricsovh.docs.apiary.io/#
//https://www.theaudiodb.com/free_music_api

//let mySongsInit = JSON.parse(localStorage.getItem("mySongs"))|| [];


const SongSearch = () => {
    const [search, setSearch] = useState(null)
    const [lyric, setLyric] = useState(null)
    const [bio, setBio] = useState(null)
    const [loading, setLoading] = useState(false);

    const [mySongs, setMySong] = useState(() => {
    return JSON.parse(localStorage.getItem("mySongs")) || [];
  });
   
    useEffect(() => {
    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [mySongs]);

    useEffect(() =>{
        if(search === null) return;
        const fetchData = async () => {
            const {artist,song} = search;
            let artistUrl = `https://www.theaudiodb.com/api/v1/json/123/search.php?s=${artist}`; 
    
            let songUrl =  `https://api.lyrics.ovh/v1/${artist}/${song}`;
            console.log(artistUrl,songUrl);

            setLoading(true);

            const [artisRes,songRes] = await Promise.all([
                helpHttp().get(artistUrl),
                helpHttp().get(songUrl)]);

            setBio(artisRes);
            setLyric(songRes);
            setLoading(false);

            
        };

        fetchData();

        

    },[search]);

   const handleSearch = (data) =>{
    setSearch(data);

   }
    
   const handleSaveSong=() =>{
    alert("Salvando cancion favorita")
    // 1. Crear el nuevo objeto de canción
      let currentSong = { search, lyric, bio };
      let songs = [...mySongs, currentSong]
    setMySong((mySongs) => [songs]);
    setSearch(null);
    localStorage.setItem("mySongs",JSON.stringify(songs))

  // 3. Limpiar la búsqueda actual
  setSearch(null);
}
   const handleDeleteSong=(id) =>{
    let isDelete = window.confirm(`Estas seguro de eliminar id: ${id}`);
    if(isDelete){
      let songs = mySongs.filter((el,index) => index!== id)
      setMySong(songs)
      localStorage.setItem("mySongs",JSON.stringify(songs))
    }
   }



  return (
  <div>
    <HashRouter>
      <header>
        <h2>Song Search</h2>
        <Link to="/">Home</Link>
      </header>

      {loading && <Loader />}

      <article className="grid-1-2">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SongForms handleSearch={handleSearch} handleSaveSong={handleSaveSong}/>
                <SongTable mySongs={mySongs} handleDeleteSong={handleDeleteSong}></SongTable>
                {search && !loading && (
                  <SongDetails search={search} lyric={lyric} bio={bio} />
                )}
                
              </>
            }
          />

          <Route 
            path="/canciones/:id" 
            element = {<SongPage mySongs={mySongs}></SongPage>}
          />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </article>
    </HashRouter>
  </div>
);
}

export default SongSearch