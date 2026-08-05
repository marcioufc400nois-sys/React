export default  function app()
{
  let nome, idade, altura;
  nome = "marcio";
  idade= 34;
  altura= 1,83;

return (
  <div>
  <h1>hello world!</h1>
  <p style={{color : "read"}}>
    ola <b>nome</b>seja bem vindo ao react com javascript
  </p>
  <p>

    sua idade é <span style={{color: "blue"}}>{idade}</span> anos e sua  <span style={{color: "green"}}>{altura}</span> é metros C


  </p>
  <p>
    voce ja viveu {idade *365} dias.
  </p>
  </div>
); 
}