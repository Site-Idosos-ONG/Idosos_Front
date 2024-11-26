import { useState } from "react";
import style from "./AtividadeUnitaria.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function AtividadeUnitaria({ titulo, dataPrevista, checado, descricao, observacao }) {
    const [showDescription, setShowDescription] = useState(false);

    const getChecadoClass = () => {
        if (checado === 2) return style.aceito;
        if (checado === 1) return style.recusado;
        if (checado === 0) return style.pendente;
        return "";
    };
    
    const traduzirChecado = () => {
        if (checado === 1) return "RECUSADO";
        if (checado === 2) return "ACEITO";
        if (checado === 0) return "PENDENTE";
        return "DESCONHECIDO";
    };

    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.headerContent}>
                    <span className={style.titulo}>Título: {titulo}</span>
                    <span className={style.data}>Data Prevista: {dataPrevista}</span>
                </div>
                <div className={style.statusContainer}>
                    <span className={`${style.checado} ${getChecadoClass()}`}>{traduzirChecado()}</span>
                    <span className={style.openCard} onClick={() => setShowDescription(!showDescription)}>
                        <FontAwesomeIcon icon={faChevronDown} style={{ color: "#218ee7", fontSize: "20px" }} />
                    </span>
                </div>
            </div>
            <div className={`${style.descriptionContent} ${showDescription ? style.showDescription : style.hideDescription}`}>
                <span className={style.divider} />
                <div className={style.descText}>
                    <p>Descrição: {descricao}</p>
                    {observacao && <p>Observação: {observacao}</p>}
                </div>
            </div>
        </div>
    );
}

export default AtividadeUnitaria;
