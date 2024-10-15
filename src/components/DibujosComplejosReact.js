import { Component } from "react";

class DibujosComplejosReact extends Component{

    state = {
        nombres:["Lucia", "Adrian", "Jose", "Manuel","Nacho","Mario"]
    }

    generarNombre = () =>{
        this.state.nombres.push("NUEVO NOMBRE");
        //ACTUALIZAMOS STATE
        this.setState({
            nombres: this.state.nombres
        })
    }

    render(){
        return(
            <div>
                <h1>Dibuos Complejos con React</h1>
                <button onClick={() => this.generarNombre()}>
                    Generar nombre
                </button>
                {
                    //esto es codigo react , diferente a js
                    //code logico con sintaxis jsx
                    //debe contener un return
                    this.state.nombres.map((name, index) => {
                        //este codigo nunca debe estar vacio
                        // siempre return
                        return(<h1 key={index} style={{color:"greenyellow"}}>{name}</h1>)
                    })
                }
            </div>
        )
    }
}
export default DibujosComplejosReact