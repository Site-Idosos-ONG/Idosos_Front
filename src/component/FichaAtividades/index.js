import { useState } from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { approveActivity, sendObservation } from "../../service/API_Fumcition";

export const FichaAtividades = ({ solicitante, data, titulo, descricao, usuario_id, atividade_id }) => {
    const [showDescription, setShowDescription] = useState(false);
    const [isObservationModalOpen, setIsObservationModalOpen] = useState(false);
    const [observation, setObservation] = useState("");

    const handleApproval = async () => {
        try {
            await approveActivity(titulo, usuario_id, atividade_id,);
            alert("Atividade aprovada com sucesso!");
        } catch (error) {
            alert("Erro ao aprovar atividade.");
        }
    };

    const handleSendObservation = async () => {
        try {
            await sendObservation(titulo, usuario_id, atividade_id, observation);
            alert("Observação enviada com sucesso!");
            setIsObservationModalOpen(false);
            setObservation("");
        } catch (error) {
            alert("Erro ao enviar observação.");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <span>Título: {titulo}</span>
                    <span>Solicitante: {solicitante}</span>
                    <span>Data: {data}</span>
                </div>
                <span
                    className={styles.openCard}
                    onClick={() => setShowDescription(!showDescription)}
                >
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{ color: "#218ee7", fontSize: "20px" }}
                    />
                </span>
            </div>
            <div
                className={
                    styles.descriptionContent +
                    " " +
                    (showDescription ? styles.showDescription : styles.hideDescription)
                }
            >
                <span className={styles.divider} />
                <div className={styles.descText}>
                    <p>Descrição: {descricao}</p>
                </div>
                <div className={styles.confirm}>
                    <span onClick={handleApproval}>
                        <FontAwesomeIcon icon={faSquareCheck} style={{ color: "#00fa11" }} />
                    </span>
                    <span onClick={() => setIsObservationModalOpen(true)}>
                        <FontAwesomeIcon icon={faSquareXmark} style={{ color: "#fa0000" }} />
                    </span>
                </div>
            </div>

            {isObservationModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h2>Adicionar Observação</h2>
                        <textarea
                            placeholder="Insira sua observação"
                            value={observation}
                            onChange={(e) => setObservation(e.target.value)}
                        />
                        <div className={styles.modalActions}>
                            <button className={styles.salvar} onClick={handleSendObservation}>Enviar</button>
                            <button className={styles.cancelar} onClick={() => setIsObservationModalOpen(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
