import {Link}from "react-router-dom";

export default function SaoPaulo()
{
    return(
        <div>
            <h1> Estudo do Sao Paulo</h1> 
            <div className="conteudo">
                <img src="/SP.png"/>
                <p>
                    São Paulo é o maior centro financeiro, corporativo e cultural da América Latina, destacando-se como uma metrópole verdadeiramente cosmopolita e vibrante. A cidade abriga uma impressionante diversidade étnica e cultural, que se reflete na sua arquitetura singular, no ritmo frenético do seu cotidiano empresarial e na famosa gastronomia reconhecida mundialmente, oferecendo desde restaurantes de alta gastronomia até feiras e comidas de rua tradicionais.

Além da sua potência econômica e industrial, São Paulo é um polo educacional e cultural vibrante, repleto de museus renomados como o MASP e a Pinacoteca, teatros, parques urbanos imponentes como o Ibirapuera, e eventos internacionais de grande porte. Viver ou visitar a capital paulista significa mergulhar em uma experiência única, onde a tradição e a inovação se encontram continuamente a cada esquina.
                </p>

                <p>
                    <Link to="/">voltar</Link>  
                </p>

        
            </div>
            
        </div>
    );
}