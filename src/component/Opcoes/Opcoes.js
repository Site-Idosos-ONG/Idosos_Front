import React, { useState } from "react";
import style from "./Opcoes.module.css"
import Botao from "../Botao/Botao";

const Opcoes = () => {
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Item: ${item}, Data: ${date}`);
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h1 className={style.title}> Doações de Itens</h1>
        <label className={style.label}>
          Item:
          <select
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className={style.input}
          >
            <option value="">Selecione</option>
            <option value="alimentos">Alimentos</option>
            <option value="roupas">Roupas</option>
            <option value="higiene">Higiene Pessoal</option>
            <option value="outros">Outros</option>
          </select>
        </label>

        <label className={style.label}>
          Data:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={style.input}
          />
        </label>

        <Botao children={"Enviar"} className={style.button} color={'blueButton'} />

      </form>
    </div>
  );
};

export default Opcoes;
