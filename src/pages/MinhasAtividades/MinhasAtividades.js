import { SideBarMenu } from "../../component/Sidebar/SideBarMenu";
import MinhasAtividadesCom from "../../component/MinhasAtividadesCom/MinhasAtividadesCom";

function EditarPerfil() {
    return (
        <div style={{ flexDirection: "row", display: "flex", width: "100vw", height: "100%" }}>
            <SideBarMenu />
            <MinhasAtividadesCom />
        </div>
    );
}

export default EditarPerfil;