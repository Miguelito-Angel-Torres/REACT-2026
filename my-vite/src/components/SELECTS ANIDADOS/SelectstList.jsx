import React from 'react'
import { useFetch1 } from '../../hooks/useFetch1'
import Loader from '../CRUD_API/Loader';
import Message from '../CRUD_API/Message';

const SelectstList = ({title,url,handleChange}) => {
  const {data,error,loading} = useFetch1(url);
  console.log(data,error,loading);
  if(!data) return null;
  if(error){
    return <Message msg={`Error ${error.status}:${error.statusText}`} bgColor="#dc3545"></Message>
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data.response[title];
  console.log(options)

  return (
    <>
      <label htmlFor={id}>{label}  </label> 
      {loading && <Loader></Loader>}
        <select name={id} id={id} onChange = {handleChange}>
            <option value="">Elige un {title}</option>
            {data && options.map((el) => <option value={el} key={el}>{el}</option>)}
        </select>
    </>
  )
}

export default SelectstList