import React from 'react'

const SongLyric = ({title,lyric}) => {
  return (
    <section>
      <h3>{title}</h3>
      <blockquote style={{whiteSpace: "pre-line"}}>{lyric}</blockquote>

    </section>
  )
}

export default SongLyric