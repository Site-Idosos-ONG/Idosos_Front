import { SideBarMenu } from "../../component/Sidebar/SideBarMenu";
import style from "./Doacoes.module.css";
import Opcoes from "../../component/Opcoes/Opcoes";


function Doacoes() {
    return (
        <div className={style.container_geral}>
            <SideBarMenu />
            <div className={style.container}>
                <div className={style.titulo}>
                    <h1>Realizar Doação</h1>
                    <h2>Realize doações de itens ou em dinheiro</h2>
                </div>
                <div className={style.divisao}>
                    <div className={style.pix}>
                        <img className={style.qrCode} about="logo" src={require("../../assets/Img/qrcode.png")} alt="QRCODE" />
                        <div className={style.texto}>
                            <h1>Escaneie o QR CODE</h1>
                            <h2>ou use nossa chave pix: xxxx@gmail.com</h2>
                        </div>
                    </div>
                    <Opcoes />
                </div>
            </div>
        </div>
    )
}

export default Doacoes;
