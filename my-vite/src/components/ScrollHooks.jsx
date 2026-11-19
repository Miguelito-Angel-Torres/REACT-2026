import React,{useState,useEffect} from 'react'

export default function ScrollHooks(){
const [scrollY, setScrollY] = useState(0)

// Se ejecuta cuando se hace referencia la variable , indicando que se va actualizar
useEffect(() =>{
    console.log("M")
    const detectarScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll",detectarScroll);
    return () => window.removeEventListener("scroll",detectarScroll);
},[scrollY]);

// Se ejecuta una sola despues del componente
useEffect(()=>{
    console.log("Fase de Montaje")
},[]);

// Se ejecuta cuando se renderiza el componente
useEffect(()=>{
    console.log("Fase de Actualizacion")
})

useEffect(()=>{
    return () =>{
        console.log("Fase de Desmontaje");
    };
})
    
    return(
        <>
            <h2>Hooks-useEffect y el Ciclo de Vida</h2>
            <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    )
}
