import { Component } from "react";
import HijoNumero from "./HijoNumero"

class PadreNumeros extends Component{

    state ={
        numeros:[],
        contador:0
    }
    
    

    generarNuevoNumero = () =>{
        var nuevoValor = Math.floor(Math.random() * 101);
        var index = this.state.numeros.length
        console.log(index)
        this.state.numeros.push(<HijoNumero numero={nuevoValor} key={index} sumarNumeros={this.sumarNumeros}/>);
        this.setState({
            numeros: this.state.numeros
        })
        console.log(this.state.numeros)
    }

    sumarNumeros = (numeroSeleccionado) =>{
        this.setState({
            contador: parseInt(this.state.contador) + parseInt(numeroSeleccionado)
        })
    }

    render(){
        return(
            <div>
                <h1 style={{color:"blue"}}>Suma Numeros</h1>
                <h3>{this.state.contador}</h3>
                <button onClick={() => this.generarNuevoNumero()}>NUEVO NUMERO</button>
                {
                    this.state.numeros.map((numeros,index) =>{
                        return(numeros)
                    })
                }
            </div>
        )
    }
}
export default PadreNumeros