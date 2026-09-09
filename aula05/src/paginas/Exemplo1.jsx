import {Link} from "react-router-dom";
import "../App.css";

export default function Exemplo1()

{
     const aluno = ["guilherme","gustavo", "felipe", "ana",  "helena"];
    
     

    return (
        <div>
            <h1>Exemplo 1</h1>

            <div className="conteudo">
             <h3>Lista de Alunos</h3>

             {aluno.map(
                    (aluno,  index)=>(<p>aluno {index }: {aluno}</p>)
             )}
                <P>
                    
                   o tamanho do vetor é {aluno.length} 
                    
                    </P>              

                
                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
            
        </div>
    );
}