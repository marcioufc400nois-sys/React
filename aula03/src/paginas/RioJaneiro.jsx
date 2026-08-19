import {Link}from "react-router-dom";

export default function RioJaneiro()
{
    return(
        <div>
            <h1> Estudo do Rio De Janeiro</h1> 
            <div className="conteudo">
                <img src="/RJ.png"/>
                <p>O Rio de Janeiro é reconhecido mundialmente por sua deslumbrante beleza natural e seu estilo de vida vibrante, onde a urbanização se conecta de forma única com praias icônicas como Copacabana e Ipanema e montanhas imponentes cobertas pela Mata Atlântica. Como um dos maiores polos turísticos e culturais do Brasil, a capital fluminense atrai milhões de visitantes com seus cartões-postais famosos, incluindo o Cristo Redentor e o Pão de Açúcar, que moldam a identidade marcante da "Cidade Maravilhosa".

Além das paisagens estonteantes, o Rio possui um papel fundamental na história e na identidade cultural do país, sendo o berço de ritmos como o samba e a bossa nova. A cidade transborda energia em seus centros culturais, museus de arquitetura arrojada como o Museu do Amanhã, e grandes celebrações populares reconhecidas internacionalmente, como o Carnaval e o Réveillon, garantindo uma atmosfera acolhedora e inesquecível para quem a visita.</p>
            </div>
            <p>
                <Link to="/">voltar</Link>  

            </p>
          
        </div> 
       
  

    );
}