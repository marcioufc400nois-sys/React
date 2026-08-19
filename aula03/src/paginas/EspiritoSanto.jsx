import {Link}from "react-router-dom";

export default function EspiritoSanto()
{
    return(
        <div>
            <h1> Estudo do Espirito Santo</h1> 
            <div className="conteudo">
                <img src="/ES.png"/>
                <p>O Espírito Santo é um estado marcado por uma diversidade geográfica e cultural singular na Região Sudeste do Brasil. Sua extensa faixa litorânea combina praias famosas, como as de Guarapari e Vila Velha, com importantes complexos portuários e industriais que impulsionam a economia do país. No interior, a paisagem se transforma em imponentes serras e vales verdes, como a região de Domingos Martins e a formação rochosa da Pedra Azul, abrigando um clima ameno e forte herança da imigração europeia, principalmente italiana e alemã.

A cultura capixaba é profundamente ligada à sua história e tradições, sobressaindo-se pela gastronomia única baseada nos frutos do mar e preparada em panelas de barro artesanais, tendo a moqueca e a torta capixaba como maiores símbolos. Unindo a tranquilidade de suas cidades serranas ao dinamismo do seu litoral urbanizado e industrializado, o Espírito Santo se consolida como um estado dinâmico, acolhedor e com enorme riqueza natural e cultural.</p>
           <P>
            <Link to="/">voltar</Link> 
           </P>
           
            </div>

        </div>
    );
}