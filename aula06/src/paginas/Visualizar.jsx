
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "./supabase";

export default function Visualizar() {
  const { codigo } = useParams();

  const [aluno, setAluno] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  async function carregar() {
    setCarregando(true);
    setErro("");

    const { data, error } = await supabase
      .from("alunos")
      .select("*")
      .eq("codigo", codigo)
      .single();

    if (error) {
      console.error("Erro ao buscar aluno:", error.message);
      setErro("Não foi possível encontrar o aluno.");
      setAluno(null);
    } else {
      setAluno(data);
    }

    setCarregando(false);
  }

  useEffect(() => {
    carregar();
  }, [codigo]);

  if (carregando) {
    return <p>Carregando dados do aluno...</p>;
  }

  if (erro || !aluno) {
    return (
      <div className="conteudo">
        <h1>Aluno não encontrado</h1>
        <p>{erro}</p>
        <Link to="/consulta">Voltar</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Dados do aluno</h1>

      <div className="conteudo">
        <p>
          <b>Código:</b> {aluno.codigo} <br />
          <b>Nome:</b> {aluno.nome} <br />
          <b>Cidade:</b> {aluno.cidade} <br />
          <b>Estado:</b> {aluno.estado}
        </p>

        <p>
          <Link to="/consulta">Voltar</Link>
        </p>
      </div>
    </div>
  );
}
