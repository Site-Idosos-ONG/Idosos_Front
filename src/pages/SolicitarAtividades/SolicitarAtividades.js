import { SideBarMenu } from "../../component/Sidebar/SideBarMenu";
import SolicitarAtividadeMenu from "../../component/SolicitarAtividadeMenu/SolicitarAtividadeMenu";

function SolicitarAtividades() {
    return (
        <div style={{ flexDirection: "row", display: "flex", width: "100vw", height: "100%" }}>
            <SideBarMenu />
            <SolicitarAtividadeMenu/>
        </div>
    );
}

export default SolicitarAtividades;