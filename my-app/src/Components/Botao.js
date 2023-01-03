import { useState } from "react";
import styles from "./Botao.module.css";

function Botao(props) {
  const [direito, setDireito] = useState(0);
  const [esquerdo, setEsquerdo] = useState(0);

  function quantidadeDeClicksEsquerdo() {
    props = {
      esquerdo: props.esquerdo + 1,
      direito: props.direito,
    };
    setEsquerdo(props.esquerdo);
  }

  function quantidadeDeClicksDireito() {
    props = {
      esquerdo: props.esquerdo,
      direito: props.direito + 1,
    };
    setDireito(props.direito);
  }

  return (
    <>
      <button
        className={styles.botaoDesign}
        onClick={quantidadeDeClicksEsquerdo}
      >
        {direito}
      </button>
      <button
        className={styles.botaoDesign}
        onClick={quantidadeDeClicksDireito}
      >
        {esquerdo}
      </button>
    </>
  );
}

export default Botao;
