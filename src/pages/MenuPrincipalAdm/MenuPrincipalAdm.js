import style from "./MenuPrincipalAdm.module.css";
import MenuAdm from "../../component/MenuAdm/MenuAdm";
import { useState } from "react";
import { SideBarMenuAdm } from "../../component/SidebarAdm/SideBarMenuAdm";



function MenuPrincipalAdm() {


    return (
        <div style={{ flexDirection: "row", display: "flex", width: "60vw", height: "100%" }}>
            <SideBarMenuAdm />
            <MenuAdm />
        </div>
    );
}

export default MenuPrincipalAdm;