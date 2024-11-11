import style from "./ListaAtividadesAdm.module.css";
import { SideBarMenuAdm } from "../../component/SidebarAdm/SideBarMenuAdm";
import { FichaAtividades } from "../../component/FichaAtividades";



function ListaAtividadesAdm() {
    const DADOS = [
        { solicitante: "xxxx", cpf: "xxxx", data: "xxxx", descricao: "loren ipsum loren ipsum v loren ipsum" },
        { solicitante: "xxxx", cpf: "xxxx", data: "xxxx", descricao: "loren ipsum loren ipsum v loren ipsum" },
        { solicitante: "xxxx", cpf: "xxxx", data: "xxxx", descricao: "loren ipsum loren ipsum v loren ipsum" },
        { solicitante: "xxxx", cpf: "xxxx", data: "xxxx", descricao: "loren ipsum loren ipsum v loren ipsum" },
      
    ]


    return (
        <div className={style.container_geral}>
            <SideBarMenuAdm />
            <div className={style.content}>
                <h1>
                    Atividades
                </h1>
                <div className={style.fichas}>
                    {DADOS ? DADOS.map((dados, index) => (<FichaAtividades key={index} solicitante={dados.solicitante} cpf={dados.cpf} data={dados.data} descricao={dados.descricao} />))
                    : 
                    <span className={style.NaoTem}>Não existem atividades no momento...</span>
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default ListaAtividadesAdm