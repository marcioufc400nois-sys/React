export default function Exercicio3({nota1, nota2, nota3})
{
    <div className="card">
        <h3>chamadas para o componente Exercicio3</h3>
        <Exercicio3 nota1={7.5} nota2={9.5} nota3={9} />
        <hr />
        <Exercicio3 nota1={3} nota2={6.5} nota3={7} />
    </div>
}