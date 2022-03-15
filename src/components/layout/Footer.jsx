import React from "react";
import { IcoFace, IcoIns, IcoTwi } from "../items/Icones";

export default function Footer(){
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/" title="Instagram">
                            <IcoIns/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/" title="Facebook">
                            <IcoFace/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" title="Twitter">
                            <IcoTwi/>
                        </a>
                    </li>
                </ul>
            </nav>
            <div>
                <small>Desafio 1 - <a href="https://calindra.tech/" title="Calindra">Calindra.tech</a></small>
            </div>
            <div>
                <small>© 2022 - Alexandre Magno</small>
            </div>
        </footer>
    )
}