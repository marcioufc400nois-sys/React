import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Exercicio1() {
  const [baseMaior, setBaseMaior] = useState("");
  const [baseMenor, setBaseMenor] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function calcular() {
    const maior = Number(baseMaior);
    const menor = Number(baseMenor);
    const alt = Number(altura);

    const area = ((maior + menor) * alt) / 2;

    setResultado(area);
  }

  return (
    <>
      <h1>Exercício 1</h1>

      <div className="conteudo">
        <p>Base maior</p>
        <input
          type="text"
          placeholder="Digite a base maior (em cm)"
          value={baseMaior}
          onChange={(e) => setBaseMaior(e.target.value)}
        />

        <p>Base menor</p>
        <input
          type="text"
          placeholder="Digite a base menor (em cm)"
          value={baseMenor}
          onChange={(e) => setBaseMenor(e.target.value)}
        />

        <p>Altura</p>
        <input
          type="text"
          placeholder="Digite a altura (em cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <br />
        <br />

        <input
          type="button"
          value="Calcular"
          onClick={calcular}
        />

        {resultado !== "" && (
          <p>
            A área do trapézio é {Number(resultado).toFixed(2)}
          </p>
        )}

        <Link to="/">Voltar</Link>
      </div>
    </>
  );
}