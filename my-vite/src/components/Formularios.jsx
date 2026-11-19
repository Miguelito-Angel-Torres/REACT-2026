import React,{useState} from "react";
/*export default function Formularios(){
    const [nombre, setNombre] = useState("")
    const [sabor, setSabor] = useState("")
    const [lenguaje, setLenguaje] = useState("")
    const [terminos, setTerminos] = useState(false);
    
    const handleSubmit = e =>{
        e.preventDefault()
        console.log("Enviado");
    }
    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} defaultChecked/>
                <p>Elige:</p>
                <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={(e) => setSabor(e.target.value)} />
                <label htmlFor="">Vanilla</label>
                <input type="radio" id="react" name="sabor" value="react" onChange={(e) => setSabor(e.target.value)} />
                <label htmlFor="">React</label>
                <input type="radio" id="angular" name="sabor" value="angular" onChange={(e) => setSabor(e.target.value)} />
                <label htmlFor="">Angular</label>
                <p>Lenguaje:</p>
                <select name="lenguaje" id=""  onChange={(e) => setLenguaje(e.target.value)} defaultValue="" >
                    <option value="js">JS</option>
                    <option value="php">PHP</option>
                    <option value="python">PYTHON</option>
                </select>
                <br />
                <label htmlFor="terminos">Aceptos terminos</label>
                <input type="checkbox" id="terminos" name="terminos" onChange={(e) => setTerminos(e.target.checked)}/>
                <br />
                <input type="submit" />
            </form>
                
        </>
    );
}*/

export default function Formularios(){
    const [form, setForm] = useState({})

    
    const handleChange = e =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }
    
    const handleChecked = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.checked,
        })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        console.log("Enviado");
    }
    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} defaultChecked/>
                <p>Elige:</p>
                <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={handleChange} />
                <label htmlFor="">Vanilla</label>
                <input type="radio" id="react" name="sabor" value="react" onChange={handleChange} />
                <label htmlFor="">React</label>
                <input type="radio" id="angular" name="sabor" value="angular" onChange={handleChange} />
                <label htmlFor="">Angular</label>
                <p>Lenguaje:</p>
                <select name="lenguaje" id=""  onChange={handleChange} defaultValue="" >
                    <option value="js">JS</option>
                    <option value="php">PHP</option>
                    <option value="python">PYTHON</option>
                </select>
                <br />
                <label htmlFor="terminos">Aceptos terminos</label>
                <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked}/>
                <br />
                <input type="submit" />
            </form>
                
        </>
    );
}