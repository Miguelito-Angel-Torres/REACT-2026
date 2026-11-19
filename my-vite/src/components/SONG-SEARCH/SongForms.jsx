import React, { useState, useEffect } from 'react';

const initialForm ={
    artist: "",
    song: "",
}

const SongForms = ({handleSearch,handleSaveSong}) => {
    const [form, setForm] = useState(initialForm);
    const [isDisabled, setisDisabled] = useState(true)

    const handleChange = (e) =>{
           setForm({
            ...form,
            [e.target.name]:[e.target.value]
           });
        
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(!form.artist || !form.song){
            alert("Datos incompletos")
            setisDisabled(true)
            return;
        }
        handleSearch(form);
        setForm(initialForm);
        setisDisabled(false)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="artist" placeholder='Nombre del artista' onChange={handleChange} value={form.artist} />
            <input type="text" name="song" placeholder='Nombre de la cancion' onChange={handleChange} value={form.song} />
            <input type="submit" value="Enviar" />
            <input type="button" onClick={handleSaveSong} value= "Agregar Cancion" disabled={isDisabled && "disabled"} />
        </form>
    </div>
  )
}

export default SongForms