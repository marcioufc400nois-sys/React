import {Link} from "react-router-dom";
import "../App.css";
import {useState}from "react";
export default function Exemplo3()
{ 

    const[aluno, setAluno]= useState( [
    {NOME:"GUSTAVO",NOTA:8.5},
    {NOME:"FELIPE",NOTA:10.0}
    ]);

   const[nome, setNome]= useState();
   const[nota, setNota]= useState();

   function adicionar()
   {
      const novoAluno = {...aluno, nome: nome, nota: nota};
      setAluno([...aluno, novoAluno]);
      setNome("");
      setNota("");
   }

   function excluir(index)
   {
       setAluno(aluno.toSpliced(index,1));
   }
    return (
        <div>
            <h1>Exemplo 3</h1>

            <div className="conteudo">
                <form>
                    <p>
                        Digite o nome do aluno <br />
                        <input type="text"
                               value={nome}
                               onChange={(e) => setNome(e.target.value)} />
                    </p>

                    <p>
                        Digite a nota <br />
                        <input type="number"
                               value={nota}
                               onChange={(e) => setNota(e.target.value)} />
                    </p>

                    <input type="button"
                           value="Adicionar"
                           onClick={adicionar} 
                           /> 

                </form>
              {aluno.length >0 ? (
             <table>

                <tr>
                    <th>nome do aluno</th>
                    <th>nota</th>
                    <th></th>
                </tr>

                {aluno.map(
                    (aluno,index)=>(
                    <tr>
                     <td>{aluno.NOME}</td>
                     <td>{aluno.NOTA}</td>
                     <td>
                        <button onClick={() => excluir(index)}>Excluir</button>
                        </td>
                    </tr>
                    )
                )}
             </table>

            ): "nao ha aLuno cadastrado"}
                              

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
            
        </div>
    );
}