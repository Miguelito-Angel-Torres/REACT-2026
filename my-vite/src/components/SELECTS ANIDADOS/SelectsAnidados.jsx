// Llamar el useState para realizar las variables.
import React,{useState} from 'react'
import SelectstList from './SelectstList'
// Vamos a realizar tres select que va ser: Estados,Municipios,Colonias.
const SelectsAnidados = () => {
    // Tres Variables para que se almacene los estados(Estados,Municipios,Colonias)
    // Variable de Estados
    const [state, setState] = useState("")
    // Variable de Municipios
    const [town, setTown] = useState("")
    // Variable de Colonias
    const [suburb, setSuburb] = useState("")    

    const TOKEN = "a6e3b0f2-b618-4bca-a792-dc39aca55c64"
  return (
    <div>
        <h2>SELECT ANIDADOS</h2>
        <h3>PAIS</h3>
         {/*handleChange() : funcion para realiazar los cambios de variable*/}
         {/*setState es una funcion para actualizar la variable correspondiente*/}
        {/*Condicion: Si tiene valor el estado se visualiza el municipio y si tiene
        valor el municipio se visualiza la colonia */}          
        <SelectstList 
            title="estado" 
            url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`} handleChange={(e) =>{setState(e.target.value)}}>
        </SelectstList>
        {state && <SelectstList 
            title="municipios" 
            url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`} 
            handleChange={(e) =>{setTown(e.target.value)}}>   
        </SelectstList>}
        {town &&  <SelectstList 
            title="colonia" 
            url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`} 
            handleChange={(e) =>{setSuburb(e.target.value)}}>
        </SelectstList>}
        <pre>
            <code>{state}-{town}-{suburb}</code>
        </pre>
    </div>
  )
}

export default SelectsAnidados