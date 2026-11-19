import React,{Component} from "react";

// Redux: libreria externa a React para el manejo del estado global
// Context: un API interna de React , es una forma mas simplificada que Redux a pasar los datos

export default class Padre extends Component{
    state ={
        contador:0
    }
    incrementarContador = (e) =>{
        this.setState({
            contador:this.state.contador + 1
        })
    };

    render(){
        return(
            <>
                <h2>Comunicacion entre Componentes</h2>
                <p>Contador: <b>{this.state.contador}</b></p>
                <Hijo   incrementarContador={this.incrementarContador} mensaje="Mensaje 1"/>
            </>
        );
    }
}

function Hijo(props){
    return(
        <>
            <h2>{props.mensaje}</h2>
            <button onClick={props.incrementarContador}>+</button>
        </>
    )
}