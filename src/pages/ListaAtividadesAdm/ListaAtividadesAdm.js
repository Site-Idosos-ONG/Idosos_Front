import style from "./ListaAtividadesAdm.module.css";
import { useState, useEffect } from "react";
import { SideBarMenuAdm } from "../../component/SidebarAdm/SideBarMenuAdm";
import { FichaAtividades } from "../../component/FichaAtividades";
import { getListaAtividadesAdm } from '../../service/API_Fumcition';

function ListaAtividadesAdm() {
    const [atividades, setAtividades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAtividades = async () => {
            try {
                const data = await getListaAtividadesAdm();
                setAtividades(data);
            } catch (err) {
                setError("Erro ao carregar atividades.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchAtividades();
    }, []);

    return (
        <div className={style.container_geral}>
            <SideBarMenuAdm />
            <div className={style.content}>
                <h1>
                    Atividades
                </h1>
                <div className={style.fichas}>
                    {atividades.length > 0 ? (
                        atividades.map((dados, index) => (
                            <FichaAtividades
                                key={index}
                                solicitante={dados.nome_usuario}
                                cpf={dados.cpf}
                                data={dados.data}
                                titulo={dados.nome_atividade}
                                descricao={dados.descricao}
                            />
                        ))
                    ) : (
                        <span className={style.NaoTem}>Não existem atividades no momento...</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ListaAtividadesAdm