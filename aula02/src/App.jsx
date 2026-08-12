import "./app.css";
import Exemplo1 from "./Exemplo1";
import Exemplo2 from "./Exemplo2";
export default function App(){
  return (
    <div>
      <h1>aula 02 - estudo de componentes e props</h1>

      <div className="card">

        <h3>Chamdas para o Exemplo1</h3>

        <Exemplo1 numero1={10} numero2={20} />
        <hr />
        <Exemplo1 numero1={11} numero2={5} /> 
        <hr />
        <Exemplo1 numero1={9.5} numero2={3} /> 
      </div>

      div className="card">
        <h3>Chamadas para o Exemplo2</h3>

        <Exemplo2 nome="marcio" idade={19} />
        <hr />
        <Exemplo2 nome="DAVI" idade={25} />
        <hr />
        <Exemplo2 nome="guilherme" idade={45} /> 
    </div>
    
  );
}