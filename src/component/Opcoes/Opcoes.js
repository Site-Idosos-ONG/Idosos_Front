import React, { useState, useEffect } from "react";
import style from "./Opcoes.module.css"
import Botao from "../Botao/Botao";
import { postDoacao } from '../../service/API_Fumcition';

const Opcoes = () => {
  const [item, setItem] = useState("");
  const [id, setId] = useState(null);
  const [date, setDate] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (userId) {
      setId(userId);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      alert("ID do usuário não encontrado.");
      return;
    }

    const data = { id, item, date };

    try {
      const response = await postDoacao(data);

      if (response.success) {
        alert("Doação enviada com sucesso!");
        setItem("");
        setDate("");
      } else {
        alert(`Erro: ${response.error || "Erro ao enviar a doação. Tente novamente."}`);
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
      alert("Erro ao conectar ao servidor. Tente novamente.");
    }
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
