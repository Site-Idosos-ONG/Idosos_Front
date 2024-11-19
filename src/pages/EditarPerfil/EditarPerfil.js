import { SideBarMenu } from "../../component/Sidebar/SideBarMenu";
import EditarPerfilOP from "../../component/EditarPerfilOP/EditarPerfilOP";

function EditarPerfil() {
    return (
        <div style={{ flexDirection: "row", display: "flex", width: "100vw", height: "100%" }}>
            <SideBarMenu />
            <EditarPerfilOP />
        </div>
    );
}

export default EditarPerfil;