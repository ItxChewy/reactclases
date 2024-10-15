import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeportes extends Component{

    deportes =["Futbol","Volley", "Baloncesto","Hipica","Tenis"]

    state = {
        favorito: ""
    }

    mostrarFavorito = (deporteSeleccionado) => {
        this.setState({
            favorito: deporteSeleccionado
        })
    }

    render(){
        return(
            <div>
                <h1 style={{color:"green"}}>PadreDeportes</h1>
                <h4 style={{backgroundColor:"yellow"}}>
                    Su deporte favorito es: {this.state.favorito}
                </h4>
                {
                    this.deportes.map((deporte, index) =>{
                        return(<HijoDeporte key={index} 
                            nombre={deporte} mostrarFavorito={this.mostrarFavorito}/>)
                    })
                }
            </div>
        )
    }
}
export default PadreDeportes