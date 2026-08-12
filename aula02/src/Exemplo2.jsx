export default function Exemplo2({nome, idade}){
 
    let dias = Number(idade) * 365;
   return (
    <div>
      <p>
        Nome: {nome} <br />
        Idade: {idade} <br />
        Dias vividos: {dias}
      </p>
    </div>
  );
}