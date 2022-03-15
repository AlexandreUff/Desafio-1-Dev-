import React from "react";
import { ProdImg } from "./Icones";

export default function Produto(props){
    return (
        <div className="produto">
            <a href="#" title={props.titulo}>
                <div className="imagem-prod">
                    <ProdImg/>
                </div>
                <h2>{props.titulo}</h2>
                </a>
        </div>
    )
}