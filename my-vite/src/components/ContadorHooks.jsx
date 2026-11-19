import React,{useState} from 'react';

export default function ContadorHooks(props){
    const [contador,setContador] = useState(0);
    
    const sumar = () => setContador(contador + 2);

    const restar = () => setContador(contador - 1); 
    
    return(
        <>
            <h2>Hooks-useState</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <p>Contador de {props.titulo}</p>
            <nav>{contador}</nav>

        </>
    );
}
ContadorHooks.defaultProps ={
    titulo:"Clicks"
}