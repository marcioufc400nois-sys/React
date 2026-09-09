import {Link} from "react-router-dom";
import "../App.css";
import {useState}from  "react";

export default function Exemplo2()
{
    const [aluno, setAluno] = useState(["guilherme","gustavo", "felipe", "ana",  "helena"]);
    const [nome,setNome] =  useState("");

    function adicionar()
    {
        setAluno([...aluno, nome]);
        setNome("");
    }

    function excluir(index)
    {
        setAluno(aluno.toSpliced(index, 1)); 
    }

    return (
        <div>
            <h1>Exemplo 2</h1>

            <div className="conteudo">

             <form>

                <p>
                    digite o nome do aluno <br />
                    <input type="text"
                        value={nome}
                        onchange={(e) => setNome(e.target.value)}  />
                </p>

                <p>
                    <input type="button"
                           value="Adicionar" 
                           onClick={adicionar} />
                </p>


             </form>

                <h3>Lista de Alunos</h3>

                
                <ul>
                    {aluno.map((aluno, index) => (
                        <li>
                            Aluno: {aluno}
                            <a href="#" onClick={() => excluir(index)}>Excluir</a>
                        </li>
                    ))}
                </ul>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
            
        </div>
    );
}