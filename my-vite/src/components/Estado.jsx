/*State : Es un conjunto de variables que tiene los componentes*/
/*setState() : Para hacer cambios hay que hacer uso del metodo*/
import React,{Component} from "react";
// -- HIJO, es un componente funcional
function EstadoHijo(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    );
}





// -- PADRE
export default class Estado extends Component{
    constructor(props){
        super(props)
        this.state = {
            contador:0,
        };
        /*setInterval(()=>{
            this.setState({
                contador:this.state.contador + 1 
            })
        },1000);*/
    }
    // Se va renderizando(actualizando)
    render(){
        return(
            <div>
                <h2>Estado</h2>
                <p>{this.state.contador}</p>
                <EstadoHijo contadorHijo ={this.state.contador}></EstadoHijo>
            </div>
        );
    }
}