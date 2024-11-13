import style from "./AtividadeUnitaria.module.css";
import mais from "../../assets/Img/Mais.svg";

function AtividadeUnitaria({ titulo, dataPrevista, checado, descricao }) {
    // Função para definir a classe CSS com base no valor de 'checado'
    const getChecadoClass = () => {
        if (checado === "ACEITO") return style.aceito;
        if (checado === "RECUSADA") return style.recusado;
        if (checado === "PENDENTE") return style.pendente;
        return ""; // Classe vazia para qualquer outro valor
    };

    return (
        <div className={style.container}>
            <div className={style.container2}>
                <div className={style.titulo}>
                    <h2>Titulo:</h2>
                    <h1>{titulo}</h1>
                </div>
                <div className={style.data}>
                    <h2>Data Prevista:</h2>
                    <h1>{dataPrevista}</h1>
                </div>
            </div>
            <div className={style.container3}>
                <div className={`${style.checado} ${getChecadoClass()}`}>
                    <h1>{checado}</h1>
                </div>
                <div className={style.mais}>
                    <img src={mais} alt="Mais" />
                </div>
            </div>
        </div>
    );
}

export default AtividadeUnitaria;
