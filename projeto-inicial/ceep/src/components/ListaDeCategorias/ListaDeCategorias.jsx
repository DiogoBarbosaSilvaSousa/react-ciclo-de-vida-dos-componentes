import React, {Component} from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {

    _handleEventoInput(e) {
        if(e.key === "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() {
        return(
            <section className="lista-categorias">
                <ul className="lista-catagorias_lista">
                    {this.props.categorias.map((categoria,index) => {
                        return(
                            <li className="lista-de-categorias_item" key={index}>{categoria}</li>
                        );
                    })}
                    
                </ul>
                <input 
                   type="text" 
                   className="lista-de-categorias_input" 
                   placeholder="Adiconar Categoria"
                   onKeyUp={this._handleEventoInput.bind(this)} />
            </section>
          );
    }
}

export default ListaDeCategorias;