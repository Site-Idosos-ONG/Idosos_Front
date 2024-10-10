import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faDonate } from '@fortawesome/free-solid-svg-icons'
import './sidebar.css';

export function SideBarMenu () {
    const [openMenu, setOpenMenu] = useState(true)
    return (
        <Sidebar onMouseEnter={() => setOpenMenu(false)} onMouseLeave={() => setOpenMenu(true)} backgroundColor="#3C3E9A" collapsed={openMenu} style={{ height: "100vh"}}>
                <Menu className="menu">
                    <MenuItem className="menu-item">
                        <Link to={"/user"}>
                            <FontAwesomeIcon icon={faUser} className="icon" style={{ paddingLeft: 8, fontSize: '24px', marginRight: 10, color: "#ffffff", hover: "#3C3E9A" }} />
                            Perfil
                        </Link>
                    </MenuItem>

                    <SubMenu className="submenu-item" label={<><FontAwesomeIcon icon={faTasks} style={{ paddingLeft: 8, fontSize: '24px', marginRight: 10, color: "#ffffff" }} /> Interações</>}>
                        <MenuItem className="submenu">
                            <Link to={"/atividades"}>
                                <FontAwesomeIcon icon={faClipboardList} style={{ marginRight: 10, color: "#ffffff" }} />
                                Atividades
                            </Link>
                        </MenuItem>

                        <MenuItem>
                            <Link to={"/eventos"}>
                                <FontAwesomeIcon icon={faCalendar} style={{ marginRight: 10, color: "#ffffff" }} />
                                Eventos
                            </Link>
                        </MenuItem>
                    </SubMenu>

                    <MenuItem className="menu-item">
                        <Link to={"/doacoes"}>
                            <FontAwesomeIcon icon={faDonate} style={{ paddingLeft: 8, fontSize: '24px', marginRight: 10, color: "#ffffff" }} />
                            Doações
                        </Link>
                    </MenuItem>
                </Menu>
            </Sidebar>
    )
}