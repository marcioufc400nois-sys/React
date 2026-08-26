import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exemplo1() {
    const [nome, setNome] = useState();
    const [idade, setIdade] = useState();
    const [dias, setDias] = useState();
    const [resultado, setResultado] = useState();

    function calcular() {
        let res = idade * 365;

        setDias(res);
    }

    function processar() {
        let res = idade * 365;
        setDias(res);

        setResultado(
            <div>
                o aluno{nome} tem {idade} anos e viveu {dias} dias
            </div>
        );
    }


    return (
        <div>

            <h1>Exemplo 1</h1>

            <div className="conteudo">

                <form>

                    <p>
                        digite o nome do aluno: <br />
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </p>

                    <p>
                        digite a idade do aluno: <br />
                        <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />

                    </p>

                    <p>
                        <input type="button" value="Calcular" onClick={calcular} />
                        <input type="button" value="Processar" onClick={processar} />
                    </p>
                </form>

                <p>
                    Nome do aluno: {nome} <br />
                    Idade do aluno: {idade} <br />
                    Dias de vida: {dias}

                    <p>
                        {resultado}
                    </p>
                </p>




                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}