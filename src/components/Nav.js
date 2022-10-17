import * as React from "react";
import { useEffect, useState } from "react";
import { ScanQrModal } from "../Utils/ScanQrCode";
import { Modal } from "@mui/material";
import 'react-dropdown/style.css';
import ChangeXLogoColor from "/static/images/ChangeX-LogoColor.svg";
import AppleBlackIcon from "/static/images/icn-apple-black.svg";
import PlaystoreBlackIcon from "/static/images/icn-playstore-black.svg";
import QRBlack from "/static/images/icn-qr-black.svg";
import MenuIcon from "/static/images/Menu-Icon_1Menu Icon.png";
import AppleIcon from "/static/images/DW-Apple.svg"
import GoogleIcon from "/static/images/DW-Google.svg"
import {GatsbyImage, StaticImage} from "gatsby-plugin-image";



export const menuItems = [
    {
        title: 'Wealth',
        url: '/wealth',
        id: '#wealth',
        className: 'nav_menu-links w-nav-menu'
        /*submenu: [
            {
                title: 'Staking',
                url: 'staking',
            },
            {
                title: 'Lending',
                url: 'lending',
            },
            {
                title: 'Savings',
                url: 'savings',
            },
        ]*/
    },
    {
        title: 'Bank',
        url: '/bank',
        id: '#bank',
        className: 'nav_menu-links w-nav-menu'
        /*submenu: [
            {
                title: 'Debit card',
                url: 'debit-card',
            },
            {
                title: 'SEPA Bank Account',
                url: 'sepa-bank-account',
            }
        ]*/
    },
    {
        title: 'Wallet',
        url: '/wallet',
        id: '#wallet',
        className: 'nav_menu-links w-nav-menu'
        /*submenu: [
            {
                title: 'DeFy Crypto Wallet',
                url: 'defy-crypto-wallet',
            },
            {
                title: 'Swap Crypto',
                url: 'swap-crypto',
            },
            {
                title: 'Buy and Sell crypto',
                url: 'buy-sell-crypto',
            },
        ]*/
    }
];

export const iconItems = [
    {
        src: AppleBlackIcon,
        href: 'https://apps.apple.com/bg/app/changex-wallet/id1613309180' ,
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'apple'
    },
    {
        src: PlaystoreBlackIcon,
        href: 'https://play.google.com/store/apps/details?id=io.changex.app',
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'google'
    }
]

export const mobileIcon = [
    {
        src: AppleIcon,
        href: 'https://apps.apple.com/bg/app/changex-wallet/id1613309180' ,
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'apple'
    },
    {
        src: GoogleIcon,
        href: 'https://play.google.com/store/apps/details?id=io.changex.app',
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'google'
    }
]


export default function Navigation() {

    const [value, setValue] = useState('$CurrentPrice');
    const [apy, setApy] = useState('$CurrentAPY');
    const [openNav, setIsNavOpen] = useState(false);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        fetchData()
            .catch((err)=> {})
    }, [])

    function openModal() {
        setShowModal(true);
    }

    function openNavDropDown() {
        setIsNavOpen(current => !current);
    }


    const fetchData = async () => {
        const response = await fetch("https://changex-price-fetcher-xcl5j.ondigitalocean.app/coins/markets?ids=changex&vs_currency=usd");
        const data = await response.json();

        if (data) {
            setValue(data[0].current_price.toFixed(4))
        }

        const responseAPY = await fetch("https://hydra-dex-backend.changex.io/api/staking/apy?amount=1");
        const dataAPY = await responseAPY.json();

        if (dataAPY) {
            setApy(dataAPY.inPercent)
        }
        setTimeout(fetchData, 30000);
    }

    return (
    <div data-animation="default" className="nav_bar w-nav animate__animated animate__fadeInDown">
        <div className="padding-global nav-padding">
            <div className="container-large is-nav w-container">
                <div className="nav_full-wrapper">
                    <div className="nav_left-wrapper">
                        <a className="nav_brandlink margin-right margin-small w-nav-brand">
                            <img src={ChangeXLogoColor} loading="lazy" alt="ChangeX Logo in navigation bar" className="nav_logo"></img>
                        </a>
                        <nav role="navigation" className="nav_menu-links w-nav-menu hide-mobile-landscape">
                            {menuItems.map((menu, index) => {
                                return (
                                    <a href={menu.id} className="nav_link w-nav-link" style={{maxWidth: "1376px"}} key={index}>{menu.title}</a>
                                    /*<Dropdown placeholder={menu.title}  className={menu.className}/>*/
                                );
                            })}
                        </nav>
                    </div>
                    <div className="nav_right-wrapper hide-mobile-landscape">
                        <div className="nav_stats-wrapper">
                            <div className="padding-small">
                                <div id="changexPrice" className="text-size-tiny changexprice">$CHANGE:&nbsp;
                                    <a target="_blank" className="price-highlight" href="https://www.coingecko.com/en/coins/changex" >
                                        <span>{value}<img style={{marginLeft: '2px'}} src="/images/external_link.svg"/></span>

                                    </a></div>
                            </div>
                        </div>
                        <div className="nav_stats-wrapper">
                            <div className="padding-small">
                                <div id="changexApy" className="text-size-tiny text-color-black changexapy">APY:<strong> {apy}%</strong></div>
                            </div>
                        </div>
                        <ul className="nav_download-wrapper w-list-unstyled">

                            {iconItems.map((icon, index) => {
                                return (
                                    <li onClick={icon.onclick} id={icon.id} className="nav_download-item">
                                        <a href={icon.href}  className={icon.class}><img src={icon.src} loading="lazy" width="21"></img></a>
                                    </li>
                                );
                            })}
                            <li onClick={openModal} id="qrcode" className="nav_download-item">
                                <div style={{cursor: "pointer"}} className="nav_download-btn w-inline-block">
                                    <img src={QRBlack} loading="lazy" width="21"></img>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-button w-nav-button" aria-label="menu" role="button" tabIndex="0"
                         aria-controls="w-nav-overlay-0" aria-haspopup="menu">
                        <img onClick={openNavDropDown} src={MenuIcon} width="20" alt="ICON" className="menu-icon"></img>
                    </div>
                </div>
            </div>
        </div>
        {openNav &&  <div className="w_nav-overlay">
            <Nav role="navigation" className="nav_menu-links w-nav-menu" data-nav-menu-open=""
                 style={{transform: 'translateY(0px)', transition: 'transform 400ms ease 0s'}}>
                {menuItems.map((menu, index) => {
                    return (
                        <a  onClick={openNavDropDown} href={menu.id} className="nav_link w-nav-link w--nav-link-open" style={{maxWidth: "1376px"}} key={index}>{menu.title}</a>
                    );
                })}

                <div className="hide-desktop">
                    <div className="nav_right-wrapper margin-top margin-huge">

                        <div className="nav_stats-wrapper">
                            <div className="padding-small">
                                <div id="changexPrice2" className="text-size-tiny changexprice">$CHANGE:
                                    <a href="https://www.coingecko.com/en/coins/changex" target="_blank"
                                       className="price-highlight">
                                        <span>0.0252
                                            <img src="https://uploads-ssl.webflow.com/63315e7a42bc6afd0341c3bd/633af48efed1b8c1674e5f3e_icn-externallink.svg"
                                             alt="external link" width="9">
                                            </img>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="nav_stats-wrapper">
                            <div className="padding-small">
                                <div id="changexApy2" className="text-size-tiny text-color-black changexapy">APY: <b>63.08%<b></b></b>
                                </div>
                            </div>
                        </div>

                        <div className="button-group centered-items margin-top margin-large spread max-width-full-mobile-landscape">
                            {mobileIcon.map((icon, index) => {
                                return (
                                    <a href={icon.href} id={icon.id} target="_blank"
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
            </Nav>
        </div>}
        <Modal open={showModal}>
            <ScanQrModal className="section-scanpopup wf-section"
                         showModal={showModal}
                         setShowModal={setShowModal}
                         aria-labelledby="modal-modal-title"
                         aria-describedby="modal-modal-description">
            </ScanQrModal>
        </Modal>
    </div>
);}
