import "./index.scss";

import { useRef, useState } from 'react';
import { BiMenu, BiSearch, BiGridAlt, BiUser, BiChat, BiPieChartAlt2, BiCartAlt, BiHeart, BiCog, BiLogOut } from "react-icons/bi";

import { IProps } from "../../interface";
import { userLogin } from "../../utils";


export default function Sidebar({ children }:IProps) {
    const [inputSearch, setInputSearch] = useState<string>('');
    const sidebarRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);

    function clickInput(): void {
        sidebarRef.current?.classList.toggle("open");
        menuBtnChange(); //calling the function(optional)
    }
    // following are the code to change sidebarRef button(optional)
    function menuBtnChange() {
        if (sidebarRef.current?.classList.contains("open")) {
            btnRef.current?.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
        } else {
            btnRef.current?.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
        }
    }

    return (
        <>
            <div className="sidebar" ref={sidebarRef}>
                <div className="logo-details">
                    <i className="bx bx-menu" ref={btnRef} onClick={() => clickInput()}><BiMenu /></i>
                    <div className="logo_name">SideMenu</div>
                </div>
                <ul className="nav-list">
                    <li>
                        <i className="bx bx-search" onClick={() => clickInput()}><BiSearch /></i>
                        <input type="text" placeholder="Pesquisar..." value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)}/>
                        <span className="tooltip">Pesquisar</span>
                    </li>
                    <li>
                        <a href="/">
                            <i><BiGridAlt /></i>
                            <span className="links_name">Dashboard</span>
                        </a>
                        <span className="tooltip">Dashboard</span>
                    </li>
                    <li>
                        <a href="/">
                            <i><BiUser /></i>
                            <span className="links_name">Usuário</span>
                        </a>
                        <span className="tooltip">Usuário</span>
                    </li>
                    <li>
                        <a href="/">
                            <i ><BiChat /></i>
                            <span className="links_name">Mensagem</span>
                        </a>
                        <span className="tooltip">Mensagem</span>
                    </li>
                    <li>
                        <a href="/">
                            <i><BiPieChartAlt2 /></i>
                            <span className="links_name">Gráfico</span>
                        </a>
                        <span className="tooltip">Gráfico</span>
                    </li>
                    <li>
                        <a href="/">
                            <i><BiCartAlt /></i>
                            <span className="links_name">Pedidos</span>
                        </a>
                        <span className="tooltip">Pedidos</span>
                    </li>
                    <li>
                        <a href="/">
                            <i><BiHeart /></i>
                            <span className="links_name">Favoritos</span>
                        </a>
                        <span className="tooltip">Favoritos</span>
                    </li>
                    <li>
                        <a href="/">
                            <i><BiCog /></i>
                            <span className="links_name">Configurações</span>
                        </a>
                        <span className="tooltip">Configurações</span>
                    </li>
                    <li className="profile">
                        <div className="profile-details">
                            <img src={userLogin.image} alt="profileImg" />
                            <div className="name_job">
                                <div className="name">{userLogin.name}</div>
                                <div className="job">{userLogin.job}</div>
                            </div>
                        </div>
                        <i className="log_out" ><BiLogOut /></i>
                    </li>
                </ul>
            </div>
            <section className="home-section">
                {children}
            </section>
        </>
    )
}

