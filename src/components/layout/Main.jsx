import React from "react";
import { Component } from "react";
import API from "../../API";
import Produto from "../items/Produto";


export default class Main extends Component {

    state = {
        produtos: []
    }

    async componentDidUpdate(prevProps){
        if(this.props.dado !== prevProps.dado){
            const resp = await API.get(`https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${this.props.dado}&source=nanook`)
                            .catch(e => alert(`Nenhum produto relacionado com o termo de pesquisa '${decodeURI(this.props.dado)}' foi encontrado.`));
    
            this.setState({produtos: resp.data.products});
        }

        
    }

    render(){

        const {produtos} = this.state;

        return (
            <main>
                {produtos.map(prod => (
                    <Produto key={prod.id} titulo={prod.name}/>
                ))}
            </main>
        )}
}