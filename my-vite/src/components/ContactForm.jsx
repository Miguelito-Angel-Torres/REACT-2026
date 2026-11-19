// Para enviar formulario https://formsubmit.co/

import { useForm } from "../hooks/useForm";
import Loader from "./CRUD_API/Loader";
import Message from "./CRUD_API/Message";

const initialForm = {
    name:"",
    email:"",
    subject:"",
    comments:"",
};
const validationsForm = (form) =>{
    let errors = {};    
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if(!form.name.trim()){
        errors.name = "El campo 'Nombre' es requerido"
    }else if(!regexName.test(form.name.trim())){
        errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
    }

    if(!form.email.trim()){
        errors.email = "El campo 'Email' es requerido"
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El campo 'Email' es incorrecto";
    }

    if(!form.subject.trim()){
        errors.subject = "El campo 'Subject' es requerido"
    }

    if(!form.comments.trim()){
        errors.comments = "El campo 'Comentario' es requerido"
    }else if(!regexComments.test(form.comments.trim())){
        errors.comments = "El campo 'Comentario' debe obtener mx 255 car.";
    }



    return errors
};
let styles = {
    fontWeight:"bold",
    color:"#dc3545"
}

const ContactForm = () => {
    const {
        form,
        error,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm,validationsForm);
    return(
        // onBlur = Evento se realiza cuando pierde el focus
        <div>
            <h2>Formulario de Contacto</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Escribe tu nombre" onChange={handleChange}
                value={form.name} required onBlur={handleBlur}/>

                {error.name && <p style={styles}>{error.name}</p>}

                <input type="email" name="email" placeholder="Escribe tu email" onChange={handleChange}
                value={form.email} required onBlur={handleBlur}/>

                {error.email && <p style={styles}>{error.email}</p>}

                <input type="text" name="subject" placeholder="Asunto a tratar" onChange={handleChange}
                value={form.subject} required onBlur={handleBlur}/>

                {error.subject && <p style={styles}>{error.subject}</p>}

                <textarea name="comments" cols="50" rows="5" id="" placeholder="Comentarios"
                onChange={handleChange} value={form.comments} required onBlur={handleBlur}></textarea>
                <input type="submit" value="Enviar" />

                {error.comments && <p style={styles}>{error.comments}</p>}
            </form>
            {loading && <Loader></Loader>}
            {response && 
                <Message msg="Los datos han sido enviados" bgColor="#198754"></Message>
            }
        </div>
    )
}

export default ContactForm;