import { Component } from "react";

class HijoDeporte extends Component{

    seleccionarFavorito = () =>{
        //capturamos el deporte seleccionado en props
        var deporte = this.props.nombre
        //realizamos la llamada al padre enviando el deporte
        this.props.mostrarFavorito(deporte)

    }
   

    render(){
        return(
            <div>
                <h2 style={{color:"blueviolet"}}>
                    {this.props.nombre}
                </h2>
                
                <button onClick={this.seleccionarFavorito}>
                    Seleccionar favorito
                </button>
            </div>
        )
    }
    }
export default HijoDeporte