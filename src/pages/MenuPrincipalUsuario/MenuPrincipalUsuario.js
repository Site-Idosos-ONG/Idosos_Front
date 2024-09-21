import style from "./MenuPrincipalUsuario.module.css";
import MenuInicial from "../../component/MenuInicial/MenuInicial";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faCalendarDays, faCircleUser, faSquarePen, faChevronRight, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'


function MenuPrincipalUsuario() {
    const element = <FontAwesomeIcon icon="fa-solid fa-house" />
    return(

        <div className={style.fundo}>
            <nav className={style.sidebar}>
                <div className={style.sidebarContent}>
                    <ul className={style.sideItens}>
                        
                        <li className={style.sideItem + " " + style.active}>
                        <FontAwesomeIcon icon={faCircleUser} style={{color: "#ffffff",}} />
                            <span className={style.texto}>Perfil</span>
                        </li>
                        
                        <li className={style.sideItem}>
                            <FontAwesomeIcon icon={faGift} style={{color: "#ffffff",}} />
                            <span className={style.texto}>Doações</span>
                        </li>

                        <li className={style.sideItem}>
                            <FontAwesomeIcon icon={faCalendarDays} style={{color: "#ffffff",}} />
                            <span className={style.texto}>Eventos</span>
                        </li>

                        <li className={style.sideItem}>
                        <FontAwesomeIcon icon={faSquarePen} style={{color: "#fafafa",}} />
                            <span className={style.texto}>Agendar Atividade</span>
                        </li>
                        
                    </ul>
                    
                    <button className={style.btnRight}>
                        <FontAwesomeIcon className={style.iconRight} icon={faChevronRight} style={{color: "#12125e",}} />
                    </button>
                </div>

                <div className={style.logoutBtn}>
                    <button className={style.btnLogout}>
                        <FontAwesomeIcon icon={faRightFromBracket} style={{color: "#ffffff",}} />
                        <span className={style.logoutTexto}>Sair</span>
                    </button>
                </div>
            </nav>

            
            <MenuInicial />
    
           
       
           
        </div>
    );
}

export default MenuPrincipalUsuario;