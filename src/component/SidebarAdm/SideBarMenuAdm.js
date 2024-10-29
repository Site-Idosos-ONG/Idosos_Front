import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faDonate } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import style from './SidebarAdm.module.css';

export function SideBarMenuAdm () {
    const [openMenu, setOpenMenu] = useState(true)
    return (
        <Sidebar onMouseEnter={() => setOpenMenu(false)} onMouseLeave={() => setOpenMenu(true)} backgroundColor="#1164A7" collapsed={openMenu} style={{ height: "100vh"}}>
                <Menu className={style.menu}>
                    <MenuItem className={style.menuitem}>
                        <Link to={"/user"}>
                            <FontAwesomeIcon icon={faUser} className="icon" style={{ paddingLeft: 8, fontSize: '24px', marginRight: 10, color: "#ffffff", hover: "#3C3E9A" }} />
                            Perfil
                        </Link>
                    </MenuItem>

                    <SubMenu className={style.submenuitem} label={<><FontAwesomeIcon icon={faTasks} style={{ paddingLeft: 8, fontSize: '24px', marginRight: 10, color: "#ffffff" }} /> Interações</>}>
                        <MenuItem className={style.submenu}>
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

                    <MenuItem className={style.menuitem}>
                        <Link to={"/doacoes"}>
                            <FontAwesomeIcon icon={faDonate} style={{ paddingLeft: 8, fontSize: '24px', marginRight: 10, color: "#ffffff" }} />
                            Doações
                        </Link>
                    </MenuItem>

                    <MenuItem className={style.log}>
                    <FontAwesomeIcon icon={faRightFromBracket} size="xl" style={{paddingLeft: 8, color: "#ffffff"}} />
                    <div>Logout</div>
                    </MenuItem>
                    
                </Menu>
            </Sidebar>
    )
}