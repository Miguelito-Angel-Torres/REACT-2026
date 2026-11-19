import React from 'react'
import { useNavigate } from 'react-router-dom';
const SongTableRow = ({id,el,handleDeleteSong}) => {
    let {bio,search} = el;
    let avatar = bio.artists[0].strArtistThumb;

    let history = useNavigate();

  return (
    <tr>
        <td><img src={avatar} alt={search.artist} /></td>
        <td>{search.artist}</td>
        <td>{search.song}</td>
        <td>
        <button onClick={() => history(`/canciones/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>

        </td>
    </tr>
  )
}

export default SongTableRow