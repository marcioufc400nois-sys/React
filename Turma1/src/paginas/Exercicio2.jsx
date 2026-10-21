import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Exercicio2() {
  const pizzas = [
    { nome: "Mussarela", preco: 35 },
    { nome: "Calabresa", preco: 38 },
    { nome: "Portuguesa", preco: 40 },
    { nome: "Frango com Catupiry", preco: 42 },
    { nome: "Quatro Queijos", preco: 45 }
  ];

  const entregas = [
    { tipo: "Retirada", taxa: 0 },
    { tipo: "Entrega", taxa: 8 }
  ];

  const [saborSelecionado, setSaborSelecionado] = useState(-1);
  const [quantidade, setQuantidade] = useState(0);
  const [tipoEntrega, setTipoEntrega] = useState(0);
  const [pedidos, setPedidos] = useState([]);

  function adicionar() {
    if (saborSelecionado === -1) {
      alert("Selecione uma pizza !");
      return;
    }

    const pizza = pizzas[saborSelecionado];
    const entrega = entregas[tipoEntrega];

    const total = pizza.preco * Number(quantidade) + entrega.taxa;

    const novoPedido = {
      pizza: pizza.nome,
      quantidade: Number(quantidade),
      preco: pizza.preco,
      taxa: entrega.taxa,
      total: total
    };

    setPedidos([...pedidos, novoPedido]);

    setSaborSelecionado(-1);
    setQuantidade(0);
    setTipoEntrega(0);
  }

  function excluir(index) {
    const novaLista = pedidos.filter((_, i) => i !== index);
    setPedidos(novaLista);
  }

  const totalGeral = pedidos.reduce(
    (total, pedido) => total + pedido.total,
    0
  );

  return (
    <>
      <h1>Exercício 2 - Pedido de Pizza</h1>

      <div className="conteudo">
        <h2>Escolha a pizza</h2>

        <select
          value={saborSelecionado}
          onChange={(e) =>
            setSaborSelecionado(Number(e.target.value))
          }
        >
          <option value={-1}>Selecione uma opção</option>

          {pizzas.map((pizza, index) => (
            <option key={index} value={index}>
              {pizza.nome} - R$ {pizza.preco.toFixed(2)}
            </option>
          ))}
        </select>

        <p>
          {saborSelecionado === -1
            ? "Nenhuma pizza selecionada !"
            : pizzas[saborSelecionado].nome}
        </p>

        <h2>Quantidade</h2>

        <input
          type="number"
          min="0"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />

        <h2>Tipo de entrega</h2>

        <select
          value={tipoEntrega}
          onChange={(e) =>
            setTipoEntrega(Number(e.target.value))
          }
        >
          {entregas.map((entrega, index) => (
            <option key={index} value={index}>
              {entrega.tipo} - R$ {entrega.taxa.toFixed(2)}
            </option>
          ))}
        </select>

        <p>
          Entrega selecionada: {entregas[tipoEntrega].tipo}{" "}
          (Taxa: R$ {entregas[tipoEntrega].taxa.toFixed(2)})
        </p>

        <input
          type="button"
          value="Adicionar"
          onClick={adicionar}
        />

        <br />
        <br />

        {pedidos.length === 0 ? (
          <p>Não há pedidos.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Pizza</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Taxa</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {pedidos.map((pedido, index) => (
                <tr key={index}>
                  <td>{pedido.pizza}</td>
                  <td>{pedido.quantidade}</td>
                  <td>R$ {pedido.preco.toFixed(2)}</td>
                  <td>R$ {pedido.taxa.toFixed(2)}</td>
                  <td>R$ {pedido.total.toFixed(2)}</td>
                  <td>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        excluir(index);
                      }}
                    >
                      Excluir
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <h2>
          O valor total dos pedidos é R$ {totalGeral.toFixed(2)}.
        </h2>

        <Link to="/">Voltar</Link>
      </div>
    </>
  );
}