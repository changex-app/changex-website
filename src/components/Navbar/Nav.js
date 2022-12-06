import * as React from "react";
import { useEffect, useState } from "react";
import { ScanQrModal } from "../../Utils/ScanQrCode";
import { Modal } from "@mui/material";
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';
import { Link as SmoothLink } from 'react-scroll';
import ChangeXLogoColor from "../../../static/images/Logo_navigation.svg";
import QRBlack from "../../../static/images/icn-qr-black.svg";
import MenuIcon from "../../../static/images/Menu-Icon_1Menu Icon.png";
import { iconItems, menuItems, mobileIcon } from "./navItems";
import { fetchApy, fetchPrice } from "../../api/fetch";
import { Nav, Navbar } from "rsuite";

export default function Navigation() {

    const [apy, setApy] = useState('$CHANGE');
    const [openNav, setIsNavOpen] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [activeKey, setActiveKey] = useState(null);

    useEffect( () => {
        fetchApy()
            .then(res => {
                if (res && res.apy) {
                    setApy(res.apy.inPercent);
                }
            })

        function handleWindowResize() {
            if(window.innerWidth >= 907 ) {
                setIsNavOpen(false);
            }
        }

        window.addEventListener('resize', handleWindowResize)

        setTimeout(fetchPrice,fetchApy, 30000);

    },[])

    function openModal() {
        setShowModal(true);
    }

    function openNavDropDown() {
        setIsNavOpen(current => !current);
    }

    return (
        <div id="navigation" className="nav_bar w-nav animate__animated animate__fadeInDown">
            <div className="padding-global is-nav">
                <div className={'container-large'} >
                    <div className="is-nav navHeight">
                        <div className="nav_full-wrapper">
                            <Navbar className="nav_menu-links w-nav-menu navbar-main">
                                <Navbar.Brand href="/" className="nav_left-wrapper">
                                    <div className="nav_brandlink margin-right w-nav-brand">
                                        <Link to="/">
                                            <img src={ChangeXLogoColor} loading="lazy" alt="ChangeX Logo" className="nav_logo"></img>
                                        </Link>
                                    </div>
                                </Navbar.Brand>
                                <Nav activeKey={activeKey} className={'hide-mobile-landscape'}>
                                    {menuItems.map((menu, index) => {
                                       /*if(menu.dropdown === true) {
                                            return (
                                                <Nav.Menu id={index.toString()} title={menu.title}>
                                                    {menu.submenu.map((item, index) => {
                                                        return (
                                                            <Link to={menu.id +`/`+ item.url}>
                                                                <Nav.Item id={index.toString()} eventKey={index.toString()}>
                                                                    {item.title}
                                                                </Nav.Item>
                                                            </Link>
                                                        )
                                                    })}
                                                </Nav.Menu>
                                            )
                                        } else {*/
                                            return (
                                                <div className={`nav_menu-links navDisplay ${menu.hasLine ? "navItemBorder" : ""}`} id={index.toString()}>
                                                        <Nav.Item>
                                                            <Link to={menu.url} eventKey={index.toString()}>
                                                                {menu.title}
                                                            </Link>
                                                        </Nav.Item>
                                                </div>

                                            )
                                       /* }*/
                                    })}
                                </Nav>
                            </Navbar>

                            <div className="nav_right-wrapper">
                                <div className="nav_stats-wrapper">
                                    <div className="padding-small">
                                        <div id="changexApy" className="text-size-tiny text-color-black changexapy">$CHANGE&nbsp;APY:<strong> {apy}%</strong></div>
                                    </div>
                                </div>
                                <ul className="nav_download-wrapper w-list-unstyled hide-mobile-landscape">
                                    {iconItems.map((icon, index) => {
                                        return (
                                            <li id={index.toString()}  className="nav_download-item">
                                                <a href={icon.href}  className={icon.class}>
                                                    <img src={icon.src} alt="changex icon" loading="lazy" width="21"></img>
                                                </a>
                                            </li>
                                        );
                                    })}
                                    <li onClick={openModal} id="qrcode" className="nav_download-item">
                                        <div className="nav_download-btn w-inline-block">
                                            <img src={QRBlack} alt="changex qr" loading="lazy" width="21"></img>
                                        </div>
                                    </li>
                                </ul>
                                <div className="menu-button w-nav-button" aria-label="menu" role="button" tabIndex="0"
                                     aria-controls="w-nav-overlay-0" aria-haspopup="menu">
                                    <img onClick={openNavDropDown} src={MenuIcon} width="20" alt="changex qr" className="menu-icon"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {openNav &&  <div className="w_nav-overlay">

                <nav role="navigation" className="nav_menu-links-mobile" data-nav-menu-open="">
                            <Navbar className="navbar-main w-nav-menu" >
                                <Nav activeKey={activeKey} className="rs-navbar-mobile">
                                    {menuItems.map((menu, index) => {
                                       /* if(menu.dropdown === true) {
                                            return (
                                                <Nav.Menu className="mobileNavBtns" placement={"rightStart"} id={index.toString()} title={menu.title}>
                                                    {menu.submenu.map((item, index) => {
                                                        return (
                                                            <Link to={'/'+ menu.id +`/`+ item.url}>
                                                                <Nav.Item id={index.toString()} eventKey={index.toString()}>
                                                                    {item.title}
                                                                </Nav.Item>
                                                            </Link>

                                                        )
                                                    })}
                                                </Nav.Menu>
                                            )
                                        } else {*/
                                            return (
                                                <div  className="mobileNavBtns navDisplay" id={index.toString()}>
                                                    <Nav.Item onClick={openNavDropDown}>
                                                        <Link to={menu.url} eventKey={index.toString()}>
                                                            {menu.title}
                                                        </Link>
                                                    </Nav.Item>
                                                </div>
                                            )
                                        /*}*/
                                    })}
                                </Nav>
                            </Navbar>
                    <div className="infotainment">
                        <div className="nav_right-wrapper margin-top margin-huge">
                            <div className="button-group centered-items margin-top margin-large spread max-width-full-mobile-landscape">
                                {mobileIcon.map((icon, index) => {
                                    return (
                                        <a href={icon.href} id={icon.id} target="_blank"  rel="noreferrer"
                                           className="button is-store max-width-full-mobile-landscape w-inline-block">
                                            <img src={icon.src}
                                                 loading="lazy" alt={icon.id} width="150">
                                            </img>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>}
            <Modal id="modal" open={showModal}>
                <ScanQrModal className="section-scanpopup wf-section"
                             showModal={showModal}
                             setShowModal={setShowModal}
                             aria-labelledby="modal-modal-title"
                             aria-describedby="modal-modal-description">
                </ScanQrModal>
            </Modal>
        </div>
        </div>
);
}
