import React,{Component} from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state ={
            contador:0,
        };
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }
    sumar(e){
        this.setState({
            contador: this.state.contador + 1,
        })
    }
    restar(e){
        this.setState({
            contador:this.state.contador - 1,
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componente en clase</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar} >+</button><button onClick={this.restar}>-</button>
                </nav>
            </div>
        );
    }
}
export class EventosES7 extends Component{
        state ={
            contador:0,
        };
        
    sumar = (e) =>{
        this.setState({
            contador: this.state.contador + 1,
        })
    }
    restar =(e) =>{
        this.setState({
            contador:this.state.contador - 1,
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componente en clase</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar} >+</button><button onClick={this.restar}>-</button>
                </nav>
            </div>
        );
    }
}

function Boton(props){
    return <button onClick={props.myOnClick}>Boton componente</button>
}


export class MasSobreEventos extends Component{
    handleClick = (e, mensaje) =>{
        console.log(e)
        console.log(e.target);
        console.log(e.nativeEvent)
        console.log(mensaje)
    } 
    render(){
        return(
            <div>
                <h2>Mas Sobre Eventos</h2>
                <button onClick={(e)=>this.handleClick(e,"Pasando parametro desde un evento")}>Saludar</button>
                {/*EVENTO PERSONALIZADO*/}
                <Boton myOnClick ={(e)=>this.handleClick(e,"Pasando parametro desde un evento")} ></Boton>
            </div>
        )
     }
}