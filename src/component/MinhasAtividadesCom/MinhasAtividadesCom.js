import style from "./MinhasAtividadesCom.module.css";
import AtividadeUnitaria from "../AtividadeUnitaria/AtividadeUnitaria";
import { useState, useEffect } from "react";
import { postProcurarAtividade } from "../../service/API_Fumcition";

function MinhasAtividadesCom() {
    const [id] = useState(String(localStorage.getItem("id")));
    const [atividades, setAtividades] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const dados = {
                usuario_id: id
            };

            try {
                const response = await postProcurarAtividade(dados);
                if (Array.isArray(response)) {
                    const atividadesFormatadas = response.map((atividade) => ({
                        id: atividade[0],
                        usuarioId: atividade[1],
                        titulo: atividade[2],
                        descricao: atividade[3],
                        dataPrevista: atividade[4],
                        checado: atividade[5],
                        observacao: atividade[6],
                    }));
                    setAtividades(atividadesFormatadas);
                } else {
                    console.log("Resposta inesperada da API:", response);
                    setAtividades([]);
                }
            } catch (error) {
                console.log("Erro na chamada de editar perfil:", error);
                setAtividades([]);
            }
        };
    
        fetchData();
    }, [id]);

    return (
        <div className={style.container}>
            <div className={style.titulo}>
                <h1>Minhas Atividades</h1>
            </div>
            {Array.isArray(atividades) && atividades.length > 0 ? (
                atividades.map((atividade, index) => (
                    <AtividadeUnitaria
                        key={index}
                        titulo={atividade.titulo}
                        dataPrevista={atividade.dataPrevista}
                        checado={atividade.checado}
                        descricao={atividade.descricao}
                    />
                ))
            ) : (
                <p className={style.mensagemNenhumaAtividade}>
                    Você ainda não possui atividades.
                </p>
            )}
        </div>
    );
}

export default MinhasAtividadesCom;
