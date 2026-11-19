import React from 'react'

const SongArtist = ({artists}) => {
  return (
    <>
      <h3>{artists.strArtist}</h3>
      <img src={artists.strArtistThumb} alt={artists.strArtist} />
      <p>{artists.intBornYear} - {artists.strArtist}</p>
      <p>{artists.strCountry}</p>
      <p>{artists.strGenre}-{artists.strStyle}</p>
      <p href ={`http://${artists.strWebsite}`} target="blank" rel = "noreferrer">Sitio Web</p>
      <p>{artists.strBiographyES}</p>
    </>
  )
}

export default SongArtist