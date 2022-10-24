/*
import * as React from 'react'
import { Navbar, Nav } from 'rsuite';
import ChangeXLogoColor from "../../../static/images/ChangeX-LogoColor.svg";
import {Link} from "react-scroll";
import { menuItems } from "./navItems";

export const RightNavbar = ({ onSelect, activeKey, ...props }) => {
    return (
        <Navbar {...props} style={{background: 'transparent', height: "57px"}} className="nav_menu-links w-nav-menu hide-mobile-landscape">
            <Navbar.Brand href="#" className="nav_left-wrapper">
                <Link to="hero"  smooth={true} className="nav_brandlink margin-right margin-small w-nav-brand">
                    <img src={ChangeXLogoColor} loading="lazy" alt="ChangeX Logo in navigation bar" className="nav_logo"></img>
                </Link>
            </Navbar.Brand>
            <Nav onSelect={onSelect} activeKey={activeKey}>
                {menuItems.map((menu, index) => {
                    console.warn(menu.id)
                    if(menu.dropdown === true) {
                        return (
                            <Nav.Menu title={menu.title}>
                                {menu.submenu.map((item, index) => {
                                    return (
                                        <Nav.Item eventKey={index.toString()}>
                                            {item.title}
                                        </Nav.Item>
                                    )
                                })}
                            </Nav.Menu>
                        )
                    } else {
                        return (
                            <div style={{display: "inline-block"}}>
                                <Link to={menu.id} smooth={true} style={{color: "#222222"}}>
                                    <Nav.Item eventKey={index.toString()}>
                                        {menu.title}
                                    </Nav.Item>
                                </Link>
                            </div>
                        )
                    }
                })}
            </Nav>
        </Navbar>
    );
};
*/
