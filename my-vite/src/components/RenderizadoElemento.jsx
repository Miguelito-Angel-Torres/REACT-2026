import React,{Component} from "react";
import data from "../helpers/data.json";


function ElementoLista(props){
    return(
        <li>
            <a href="" id={props.el.id}>{props.el.name}</a>
        </li>
    )
}


export default class RenderizadoElemento extends Component{
    constructor(props){
        super(props);
        this.state = {
            seasons:["Primera","Verano","Invierno","Otoño"]
        };
    }
    render(){
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estanciones de Año</h3>
                <ol>
                    {this.state.seasons.map((el,index)=> <li key={index}>{el}</li>)}
                </ol>
                <h3>Fraweworks Fronted Javascript</h3>
                <ul>
                    {
                        data.frameworks.map((el)=>(<ElementoLista key={el.id} el={el}/>) )
                    }
                </ul>
            </div>
        )
    }
}