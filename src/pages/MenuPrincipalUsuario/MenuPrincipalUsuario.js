import style from "./MenuPrincipalUsuario.module.css";
import Foto from "../../assets/Img/FotoPerfil.png";
import MenuInicial from "../../component/MenuInicial/MenuInicial";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MenuPrincipalUsuario() {
    const element = <FontAwesomeIcon icon="fa-solid fa-house" />
    return(

        <div className={style.fundo}>
            <nav className={style.sidebar}>
                <div className={style.user}>
                    <img src={Foto} className={style.userAvatar} alt="Avatar"></img>  
                </div>

                <ul className={style.sideItens}>
                    <li className={style.sideItem}>
                        
                    </li>
                </ul>

            </nav>
            <MenuInicial />
    
           
       
           
        </div>
    );
}

export default MenuPrincipalUsuario;