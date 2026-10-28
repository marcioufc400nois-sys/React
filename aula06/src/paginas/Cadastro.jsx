
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./supabase";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [aguardando, setAguardando] = useState(false);

  async function cadastrar(e) {
    e.preventDefault();

    setMensagem("");

    if (!nome.trim() || !cidade.trim() || !estado.trim()) {
      setMensagem("Preencha todos os campos.");
      return;
    }

    setAguardando(true);

    try {
      const novo = {
        nome: nome.trim(),
        cidade: cidade.trim(),
        estado: estado.trim(),
      };

      const { error } = await supabase
        .from("alunos")
        .insert([novo]);

      if (error) {
        setMensagem("Erro ao cadastrar: " + error.message);
        return;
      }

      setMensagem("Aluno cadastrado com sucesso!");

      setNome("");
      setCidade("");
      setEstado("");
    } catch (erro) {
      setMensagem("Ocorreu um erro inesperado.");
      console.error(erro);
    } finally {
      setAguardando(false);
    }
  }

  return (
    <div>
      <h1>Cadastro de novos alunos</h1>

      <div className="conteudo">
        <form onSubmit={cadastrar}>
          <p>
            <label htmlFor="nome">Digite o nome do aluno</label>
            <br />
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </p>

          <p>
            <label htmlFor="cidade">Digite a cidade</label>
            <br />
            <input
              id="cidade"
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </p>

          <p>
            <label htmlFor="estado">Digite o estado</label>
            <br />
            <input
              id="estado"
              type="text"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
          </p>

          <button type="submit" disabled={aguardando}>
            {aguardando ? "Aguarde..." : "Cadastrar"}
          </button>

          <p>{mensagem}</p>

          <p>
            <Link to="/">Voltar</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
