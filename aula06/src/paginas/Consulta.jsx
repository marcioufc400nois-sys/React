import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./supabase";

export default function Consulta() {
  //variavel de estado para armazenar o select
  const [alunos, setAlunos] = useState([]);

  async function consultar() {
    const { data, error } = await supabase.from("alunos").select("").order("nome");
    if (error) {
      alert("erro ao consuatr" + error.message);
      return;
    }

    setAlunos(data);
  }

  useEffect(() => { consultar() }, []);

  return (
    <div>
      <h1>consultando a tabela de alunos</h1>

      <div className="conteudo">

        <p>
          forom retornados {alunos.length}alunos do banco de dados.
        </p>

         {alunos.length > 0 ?(

          <table>
           <tr>
            <th>Nome</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th></th>       
           </tr>

           {alunos.map(

              (aluno) => (
                  <tr key = {aluno.codigo}>
                  <td>{aluno.nome}</td>
                  <td>{aluno.cidade}</td>
                  <td>{aluno.estado}</td>

                 <td>

                     <Link to={"/visualizar/" + aluno.codigo}>Visualizar</Link> 
              
                  </td> 
                      

                 
                </tr>
              )
           )}
          </table>
       
         ) : " não há alunos cadastrados " }

        <p>
          <Link to="/" >Voltar</Link>
        </p>
        
    

      </div>

    </div>
  )
}