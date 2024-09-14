import style from "./MenuPrincipalUsuario.module.css";
import Foto from "../../assets/Img/FotoPerfil.png";
import MenuInicial from "../../component/MenuInicial/MenuInicial";

function MenuPrincipalUsuario() {
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