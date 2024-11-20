import { SideBarMenuAdm } from "../../component/SidebarAdm/SideBarMenuAdm";
import EditarPerfilAdm from "../../component/EditarPerfilAdm/EditarPerfilAdm";

function EditarPerfil() {
    return (
        <div style={{ flexDirection: "row", display: "flex", width: "100vw", height: "100%" }}>
            <SideBarMenuAdm />
            <EditarPerfilAdm />
        </div>
    );
}

export default EditarPerfil;