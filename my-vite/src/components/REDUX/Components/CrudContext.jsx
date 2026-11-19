import { createContext,useState,useEffect } from "react";

import { useSelector,useDispatch } from "react-redux";
import { createAction, deleteAction, noAction, readAllAction, updateAction } from "../Actions/crudAction.jsx";
import { helpHttp } from "../../../helpers/helpHttp.jsx";
const CrudContext = createContext();

const CrudProvider = ({children}) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const {db} = state.crud;

    const [dataToEdit,setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
      let api = helpHttp();
      let url = "http://localhost:5000/santos";
      useEffect(() => {
        setLoading(true);   
        api.get(url).then((res) => {
            if(!res.err){
                
                dispatch(readAllAction(res))
                
            }else{
                
                dispatch(noAction());
                setError(res);
            }
        setLoading(false);
        });
      }, [url,dispatch]);
    
      const createData = (data) => {
        data.id = Date.now().toString();
        
    
        let options = {body:data,header:{"content-type":"application/json"}};
    
        api.post(url,options).then(res => {
            if(!res.err){
                
                dispatch(createAction(res))
            }else{
                setError(res);
            }
        });
        
      }
      const updateData =(data) => {
        let endpoint = `${url}/${data.id}`;
        console.log(endpoint);
        let options = {body:data,
                        headers:{"content-type":"application/json"}};
    
        api.put(endpoint,options).then((res) => {
            if(!res.err){
                
                
                dispatch(updateAction(res))
            }else{
                setError(res);
            }
        });
        
      };
      const deleteData = (id) => {
        let isDelete = window.confirm('¿Estas seguro de eliminar?');
        if(isDelete){
            let endpoint = `${url}/${id}`;
            let options = {
                headers:{"content-type":"application/json"}};   
                api.del(endpoint,options).then(res =>{
                if(!res.err){
                
                
                dispatch(deleteAction(id))
                    
                }else{
                    setError(res);
                }
    
            });
    
            
        }else{
            return;
        }
    
      };
   
   
   
    const data = {db,error,loading, createData,dataToEdit, setDataToEdit,updateData,deleteData  }
   
    
    
    return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>
}


export {CrudProvider}
export default CrudContext; 