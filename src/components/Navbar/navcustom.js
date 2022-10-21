import * as React from 'react'
import { Navbar, Nav } from 'rsuite';
import ChangeXLogoColor from "../../../static/images/ChangeX-LogoColor.svg";
import {Link} from "react-scroll";
import { menuItems } from "./navItems";

export const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
    return (
        <Navbar {...props} style={{background: 'transparent'}} className="nav_menu-links w-nav-menu hide-mobile-landscape">
            <Navbar.Brand href="#" className="nav_left-wrapper">
                <Link to="hero"  smooth={true} className="nav_brandlink margin-right margin-small w-nav-brand">
                    <img src={ChangeXLogoColor} loading="lazy" alt="ChangeX Logo in navigation bar" className="nav_logo"></img>
                </Link>
            </Navbar.Brand>
            <Nav onSelect={onSelect} activeKey={activeKey}>
                {menuItems.map((menu, index) => {
                    return (
                        <Nav.Menu title={menu.title}>
                            {menu.submenu? menu.submenu.map((item, index) => {
                               return (
                                   <Nav.Item eventKey={index.toString()}>
                                       {item.title}
                                   </Nav.Item>
                               )
                            }) : null }
                        </Nav.Menu>
                    )
                })}
            </Nav>
        </Navbar>
    );
};
