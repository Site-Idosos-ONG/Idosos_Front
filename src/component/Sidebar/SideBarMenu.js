import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTasks, faClipboardList, faCalendar, faDonate, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import style from './Sidebar.module.css';

export function SideBarMenu() {
    const [openMenu, setOpenMenu] = useState(true);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await fetch('/logout', {
                method: 'GET',
                credentials: 'include',
            });
            if (response.ok) {
                navigate('/login');
            } else {
                console.error("Erro ao fazer logout");
            }
        } catch (error) {
            console.error("Erro na requisição de logout:", error);
        }
    };

    return (
        <Sidebar onMouseEnter={() => setOpenMenu(false)} onMouseLeave={() => setOpenMenu(true)} backgroundColor="#3C3E9A" collapsed={openMenu} style={{ height: "100vh" }}>
            <Menu 
                menuItemStyles={{
                    button: ({ level, active }) => {
                      if (level === 0 || level === 1 ) {
                        return {
                          "&:hover" :  {
                            backgroundColor: '#5A5DCE',
                          }
                        }
                      }
                    },
                  }}

             className={style.menu}>

                <MenuItem className={style.menuitem}>
                    <Link to={"/edicao/perfil"}>
                        <FontAwesomeIcon icon={faUser} className="icon" style={{ paddingLeft: 8, fontSize: '24px', marginRight: 10, color: "#ffffff" }} />
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

                    <MenuItem >
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
                
                <MenuItem className={style.menuitem} onClick={handleLogout} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faRightFromBracket} style={{ paddingLeft: 8, color: "#ffffff" }} />
                    <div>Sair</div>
                </MenuItem>

            </Menu>
        </Sidebar>
    );
}