import style from "./MenuPrincipalUsuario.module.css";
import MenuInicial from "../../component/MenuInicial/MenuInicial";
import { useState } from "react";
import { SideBarMenu } from "../../component/Sidebar/SideBarMenu";

function MenuPrincipalUsuario() {


    return (
        <div style={{ flexDirection: "row", display: "flex", width: "60vw", height: "100%" }}>
            <SideBarMenu />
            <MenuInicial />
        </div>



    );
}

export default MenuPrincipalUsuario;