// Hooks personalizado para traer la api
import {useState,useEffect} from "react"

// Funcion useFetch1 que contiene un parametro que es la url
export const useFetch1 = (url) => {
    // 3 variables de estados
    // Primer variable Data
    const [data, setData] = useState(null);
    // Segundo variable Error
    const [error,setError] = useState(null);
    // Tercer variable Loading
    const [loading,setLoading] = useState(false);

    // useEffect: Funcion que se ejecutara cuando cambie la url
    useEffect(()=>{
        // En caso no responde el servidor vamos a abortar
        const abortController = new AbortController();
        const signal = abortController.signal;


        // Funcion para llamar api que contiene informacion
        const fetchData = async () =>{
            setLoading(true);


            // Para capturar el error
            try{
                const res =  await fetch(url);

                if(!res.ok){
                    let err = new Error("Error en la peticion Fetch");
                    err.status = res.status || "00";
                    err.statusText = res.statusText || "Ocurrio un error";

                    //throw: Return el error al parametro del catch que seria el error
                    throw err;
                }

                const json = await res.json();

                
                // Si es falso indica que hubo ningun error
                if(!signal.aborted){    
                    setData(json);
                    setError(null);
                }

            }catch(error){
                // Condicion en caso que no hay un error de abortController igual esta entrando al cacth signfica que hay otro error
                if(!signal.aborted){
                    // la variable data seria null
                    setData(null);
                    // la variable error seria el objeto del error
                    setError(error)
                }
            }finally{
                if(!signal.aborted){
                    setLoading(false);

                }
            }
        };
        fetchData();
        
        // Fase desmontaje - visualizar
        return () => abortController.abort();
    },[url]);

    return {
        data:data,
        error:error,
        loading:loading
    };
}
