import "react-toastify/dist/ReactToastify.css";
import ListaAdministradores from '../../component/ListaAdministradores/ListaAdministradores';
import { SideBarMenuAdm } from "../../component/SidebarAdm/SideBarMenuAdm";
import style from './ListaAdm.module.css';





function ListaAdm() {
        return(
            <div style={{ flexDirection: "row", display: "flex", width: "100vw", height: "100%" }}>
            <SideBarMenuAdm />
            <ListaAdministradores/>
            </div>
                       

        );
    }
    
    export default ListaAdm;