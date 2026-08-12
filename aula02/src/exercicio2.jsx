export default function Exercicio2({peso, altura})
{
    <div className="card">
        <h3>chamadas para o componente Exercicio2</h3>
        <Exercicio2 peso={80} altura={1.80} /> 
        <hr />
        <Exercicio2 peso={70} altura={1.60} /> 
    </div>
}