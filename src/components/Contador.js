import { Component } from "react";

function metodoExterno(){
    console.log("funcion externa de la clase");
}
class Contador extends Component{

    numero = 1;

    incrementarNumero = () => {
        this.numero = this.numero + 1;
        console.log("Valor de numero : " + this.numero);
    }

    state = {
        valor: parseInt(this.props.inicio)
    }

    incrementarValorState = () =>{
        this.setState({
            valor: this.state.valor + 1
        });
    }

    render(){
        return(
            <div>
                <h1>Class Contador</h1>
                <h2 style={{color:"red"}}>
                    inicio del contador : {this.props.inicio}
                </h2>
                <h2 style={{color:"green"}}>
                    Valor del state: {this.state.valor}
                </h2>
                {/* la llamada a metodos es mas sencilla no se usa ni lambda ni parentesis */}
                <button onClick={this.incrementarValorState}>
                    Incrementar State
                </button>
                {/* vamos a utilizar una funcion anonima para llamar a un metodo */}
                <button onClick={() =>{
                    this.incrementarNumero();
                    //si deseamos llamar a un metodo externo no utilizamos this
                    metodoExterno();
                }}>
                    Incrementar Numero
                </button>
            </div>
        )
    }

}
export default Contador