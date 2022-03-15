import React from "react";
import { Logo } from "../items/Icones";

export default function Header(props) {

    function formSubmit(e){
        e.preventDefault();
        props.capturaInput(e.target[0].value);
    }

    return (
        <header>
            <span title="Loja Loja">
                <Logo/>
                <h1>Loja Loja</h1>
            </span>
            <form method="GET" id="FormSearch" onSubmit={formSubmit}>
                <input type="text" id="searchProd" placeholder="Digite aqui o que deseja procurar." title="Barra de pesquisa" />
                    <button title="Procurar">Procurar</button>
            </form>
            <p><a href="#" title="Olá, usuário">Olá, usuário</a></p>
        </header>
    )
}