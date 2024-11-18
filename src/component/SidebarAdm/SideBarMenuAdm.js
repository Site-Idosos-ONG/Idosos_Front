import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTasks, faClipboardList, faCalendar, faDonate, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import style from './SidebarAdm.module.css';

export function SideBarMenuAdm() {
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
        <Sidebar onMouseEnter={() => setOpenMenu(false)} onMouseLeave={() => setOpenMenu(true)} backgroundColor="#1164A7" collapsed={openMenu} style={{ height: "100vh" }}>
            <Menu menuItemStyles={{
                    button: ({ level, active }) => {
                      if (level === 0 || level === 1 ) {
                        return {
                          "&:hover" :  {
                            backgroundColor: '#308dda',
                          }
                        }
                      }
                    },
                  }}

                className={style.menu}>
                <MenuItem className={style.menuitem}>
                    <Link to={"/user"} aria-label="Perfil do usuário">
                        <FontAwesomeIcon icon={faUser} className="icon" style={{ paddingLeft: 8, fontSize: '24px', marginRight: 10, color: "#ffffff" }} />
                        Perfil
                    </Link>
                </MenuItem>

                <SubMenu className={style.submenuitem} label={<><FontAwesomeIcon icon={faTasks} style={{ paddingLeft: 8, fontSize: '24px', marginRight: 10, color: "#ffffff" }} /> Interações</>}>
                    <MenuItem className={style.submenu}>
                        <Link to={"/listaAtividadesAdm"} aria-label="Gerenciar atividades">
                            <FontAwesomeIcon icon={faClipboardList} style={{ marginRight: 10, color: "#1164A7" }} />
                            Atividades
                        </Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to={"/eventos"} aria-label="Gerenciar eventos">
                            <FontAwesomeIcon icon={faCalendar} style={{ marginRight: 10, color: "#1164A7" }} />
                            Eventos
                        </Link>
                    </MenuItem>
                </SubMenu>

                <MenuItem className={style.menuitem}>
                    <Link to={"/doacoes"} aria-label="Gerenciar doações">
                        <FontAwesomeIcon icon={faDonate} style={{ paddingLeft: 8, fontSize: '24px', marginRight: 10, color: "#ffffff" }} />
                        Doações
                    </Link>
                </MenuItem>

                <MenuItem className={style.log} onClick={handleLogout} aria-label="Logout">
                    <FontAwesomeIcon icon={faRightFromBracket} size="xl" style={{ paddingLeft: 8, color: "#ffffff" }} />
                    <div>Logout</div>
                </MenuItem>
            </Menu>
        </Sidebar>
    );
}