import { Component } from "react";

class HijoNumero extends Component{

    render(){
        return(
            <div>
                <h2 style={{color:"gray"}}>Numero Hijo : {this.props.numero} </h2>
                <button onClick={() => {this.props.sumarNumeros(this.props.numero)}}>Sumar {this.props.numero}</button>
            </div>
        )
    }
}
export default HijoNumero