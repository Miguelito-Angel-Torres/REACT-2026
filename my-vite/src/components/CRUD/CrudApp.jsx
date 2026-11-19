import React, { useState } from 'react';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const initialDb = [
    {
        id:1,
        name:"Seiya",
        constellation:"Pegaso",
    },
    {
        id:2,
        name:"Brocoli",
        constellation:"Fuertazo",
    },
    {
        id:3,
        name:"Goku",
        constellation:"Fuerte",
    },
    {
        id:4,
        name:"Vegeta",
        constellation:"Regular",
    },
    {
        id:5,
        name:"Picorro",
        constellation:"Intermedio",
    }
]

const  CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataEdit,setDataEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db,data])
  }
  const updateData =(data) => {
    let newData = db.map(el => el.id === data.id ? data:el);
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm('¿Estas seguro de eliminar?');
    if(isDelete){
        let newData = db.filter(el=>el.id !== id);
        setDb(newData);
    }else{
        return;
    }

  };

  return (
    <div>
        <h2>CRUD APP</h2>
        <article className="grip-1-2">
            <CrudForm createData ={createData} 
                    updateData= {updateData} 
                    dataToEdit = {dataEdit} 
                    setDataToEdit = {setDataEdit}></CrudForm>
            <CrudTable data={db} 
                        deleteData={deleteData} 
                        dataEdit={dataEdit} 
                        setDataToEdit={setDataEdit}>
            </CrudTable>
        </article>
    </div>
  )
}

export default CrudApp