import React, { useEffect, useState } from "react";
import Botao from "./Components/Botao";
import "./App.css";
import Tela from "./Components/Tela";

function App() {
  const [direito, setDireito] = useState(0);
  const [esquerdo, setEsquerdo] = useState(0);

  let quantidadeDeClicksEsquerdo = 0;
  let quantidadeDeClicksDireito = 0;

  function atualizarEsquerdo() {
    console.log("estou acessando o esquerdo!");
  }

  function atualizarDireito() {
    console.log("Estou acessando o direito!");
  }
  return (
    <>
      <h1>Learning More about useEffects</h1>
      <Tela
        quantidadeClicks={
          (quantidadeDeClicksEsquerdo, quantidadeDeClicksDireito)
        }
        acessandoLados={(atualizarEsquerdo, atualizarDireito)}
        lado={(esquerdo, direito)}
      ></Tela>

      <Botao
        esquerdo={quantidadeDeClicksEsquerdo}
        direito={quantidadeDeClicksDireito}
      />
    </>
  );
}

export default App;
