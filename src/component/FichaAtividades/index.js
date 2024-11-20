import { useState } from "react";
import styles from "./styles.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

export const FichaAtividades = ({ solicitante, data, titulo, descricao }) => {

    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                <span>Titulo: {titulo}</span>
                <span >Solicitante: {solicitante}</span>
                <span>Data: {data}</span>
                </div>
                <span className={styles.openCard} onClick={() => setShowDescription(!showDescription)}><FontAwesomeIcon icon={faChevronDown} style={{color: "#218ee7", fontSize: "20px"}} /></span>
            </div>
            <div className={styles.descriptionContent + " " + (showDescription ? styles.showDescription : styles.hideDescription)}>
                <span className={styles.divider}/>

                <div className={styles.descText}>
                    <p>Descricao: {descricao}</p>
                </div>
                <div className={styles.confirm}><span><FontAwesomeIcon icon={faSquareCheck} style={{color: "#00fa11",}} /> </span>
                <span><FontAwesomeIcon icon={faSquareXmark} style={{color: "#fa0000",}} /></span></div>
            </div>
            </div>
    )
}