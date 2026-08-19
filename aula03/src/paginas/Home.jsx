import {Link}from "react-router-dom";
import "../App.css";

export default function Home()

{
    return(
        <div>
            <h1> aula 03 - estudo de rotas</h1>
            <div className="conteudo">
            <h3>Região Sudeste</h3>
                <ul>
                    <li><Link to = "/estados/sp">SaoPaulo</Link></li>
                    <li><Link to = "/estados/mg">MinasGrais</Link></li>
                    <li><Link to = "/estados/es">Riojaneiro</Link></li>
                    <li><Link to = "/estados/es">EspiritoSanto</Link></li>
                    
                    
                </ul>

            </div>
        </div>
    );
}