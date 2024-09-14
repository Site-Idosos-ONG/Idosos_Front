import style from "./MenuInicial.module.css";
import Logo from "../../assets/Img/Logo.png";

function MenuInicial() {
    return (
        <div className={style.container}>
            <div className={style.titulo}>
                <h1>Lar do Irmão Velho</h1>
                <h3>Pagina do Usuario</h3>
            </div>
            <img src={Logo} alt="Logo" />
        </div>
    );
}

export default MenuInicial;