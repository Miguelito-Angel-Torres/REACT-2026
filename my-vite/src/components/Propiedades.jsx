import React from "react";
import PropTypes from "prop-types";
export default function Propiedades(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2> 
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano?"True":"False"}</li>
                <li>{props.arreglo.join(" ")}</li>
                <li>{props.objeto.correo}</li>
                /*El map genera un numero arreglo pasado a la anterior*/
                <li>{props.arreglo.map(props.function).join(" ")}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}

// Propiedad por defecto
Propiedades.defaultProps={
    porDefecto:"PORDEFECTO",
}
Propiedades.propTypes = {
    numero: PropTypes.number.isRequired
}