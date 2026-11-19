import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import CrudContext from '../CRUD_API/CONTEXTAPI/CrudContext';


const CrudTableRow = ({el}) => {
   const {setDataToEdit,deleteData} = useContext(CrudContext)

    let {name,constellation,id} = el;
    let history = useNavigate();

    const handleEdit = () =>{
      setDataToEdit(el)
      history(`/editar/${id}`)
    }


  return (
    <tr>
        <td>{name}</td>
        <td>{constellation}</td>
        <td>
            <button onClick={handleEdit}>Editar</button>   
            <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default CrudTableRow