import {Link}from "react-router-dom";

export default function MinasGerais()
{
    return(
        <div>
            <h1> Estudo do Minas de Gerais</h1> 
            <div className="conteudo">
             <img src="/Mg.png"/>   
                <p>Minas Gerais é um estado de riquezas históricas, culturais e naturais singulares, reconhecido por seu papel fundamental na formação do Brasil e por sua atmosfera acolhedora. Marcado pelas imponentes serras e pelo charme das suas cidades históricas, como Ouro Preto e Tiradentes, o estado preserva um valioso patrimônio arquitetônico do período colonial brasileiro. Sua economia diversificada sobressai na mineração, no agronegócio e na indústria, mantendo ao mesmo tempo uma forte identidade comunitária e tradições preservadas por gerações.

Além das paisagens montanhosas e do vasto patrimônio arquitetônico, Minas destaca-se por sua gastronomia icônica e pela renomada hospitalidade de seu povo. Pratos e iguanas tradicionais, como o pão de queijo e os queijos artesanais, são símbolos do cotidiano e da cultura mineira, celebrada pelo afeto e pela simplicidade nas relações. A junção entre a serenidade do interior e o dinamismo de seus polos urbanos faz de Minas Gerais uma região encantadora e essencial para a história do país.</p>

            </div>
            <P>
                <Link to="/">voltar</Link>
            </P>
        </div>
    );
}