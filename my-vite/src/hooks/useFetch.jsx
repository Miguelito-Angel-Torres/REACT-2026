import { useState,useEffect } from "react"

export const useFetch = (url) =>{
    const [data, setData] = useState(null)
    // true esta pendiente
    const [isPending, setIsPending] = useState(true)
    const [error, seterror] = useState(null)

    useEffect(() =>{
        const getData = async (url) =>{
            try{
                let res = await fetch(url);
                if(!res.ok){
                    throw { err:true,status:res.status,statusText:!res.statusText? "Ocurrio un error":res.statusText,}
                }
                let data = await res.json();
                setIsPending(false);
                setData(data);
                seterror({err:false});

            }catch(err){
                // err contiene el error
                setIsPending(true);
                seterror(err);

            }
        }
        getData(url)
    },[url]);


    return {
        data:data,
        isPending:isPending,
        error:error
    };
}