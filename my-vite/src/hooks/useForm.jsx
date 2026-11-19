import { useState } from "react"
import { helpHttp } from "../helpers/helpHttp";
export const  useForm = (initialForm,validateForm) => {
    const [form, setForm] = useState(initialForm)
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null); // va guardar la respuesta.

    // Detectar lo que estamos escribiendo cambio de valoress
    const handleChange = (e) => {
        const {name,value} = e.target
        setForm({
            ...form,[name]:value
        });
    };
    // Se lanza las validaciones
    const handleBlur = (e) => {
        handleChange(e);
        setError(validateForm(form));
    };
    // 
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(validateForm(form));
        if(Object.keys(error).length == 0){
            alert("Enviando Formulario");
            setLoading(true);
            helpHttp().post("https://formsubmit.co/ajax/mallquitorres1234@gmail.com",{
                body:form,
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json",
                },
            })
                    .then(res => {
                        setLoading(false);
                        setResponse(true);
                        setForm(initialForm);
                        setTimeout(()=> setResponse(false),5000);
                        
                    });
        }else{
            return;
        };


    };

    return {
        form:form,
        error:error,
        loading:loading,
        response:response,
        handleChange:handleChange,
        handleBlur:handleBlur,
        handleSubmit:handleSubmit,
    };
};