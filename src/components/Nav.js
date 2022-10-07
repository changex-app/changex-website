import * as React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ChangeXLogoColor from "/static/images/ChangeX-LogoColor.svg";
import DwApple from "/static/images/DW-Apple.svg";
import DwGoogle from "/static/images/DW-Google.svg";
import AppleBlackIcon from "/static/images/icn-apple-black.svg";
import PlaystoreBlackIcon from "/static/images/icn-playstore-black.svg";
import QRBlack from "/static/images/icn-qr-black.svg";
import MenuIcon from "/static/images/Menu-Icon_1Menu Icon.png";
import {useEffect, useState} from "react";

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
    },
    {
        src: QRBlack,
        href: '' ,
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item qr-icon',
        id: 'qrcode'
    }
]


export default function Navigation() {

    const [value, setValue] = useState('$CurrentPrice');
    const [apy, setApy] = useState('$CurrentAPY');

    useEffect(() => {
        fetchData().catch((err)=> {
            console.warn('err: ', err)
        })
    }, [])

    const fetchData = async () => {
        const response = await fetch("https://changex-price-fetcher-xcl5j.ondigitalocean.app/coins/markets?ids=changex&vs_currency=usd");
        const data = await response.json();

        console.warn('data[0]' ,data[0].current_price);
        setValue(data[0].current_price.toFixed(4))

        const responseAPY = await fetch("https://hydra-dex-backend.changex.io/api/staking/apy?amount=1");
        const dataAPY = await responseAPY.json();

        console.warn('dataAPY' , dataAPY.inPercent);
        setApy(dataAPY.inPercent)

    }

    return (
    <div data-animation="default" className="nav_bar w-nav animate__animated animate__fadeInDown">
        <div className="padding-global nav-padding">
            <div className="container-large is-nav w-container">
                <div className="nav_full-wrapper">
                    <div className="nav_left-wrapper">
                        <a className="nav_brandlink margin-right margin-small w-nav-brand"><img src={ChangeXLogoColor} loading="lazy" alt="ChangeX Logo in navigation bar" className="nav_logo"></img></a>
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
                                <div id="changexPrice" className="text-size-tiny changexprice">{value}</div>
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
                                    <li id={icon.id} className="nav_download-item">
                                        <a href={icon.href}  className={icon.class}><img src={icon.src} loading="lazy" width="21"></img></a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="menu-button w-nav-button"  aria-label="menu" role="button" tabIndex="0"
                     aria-controls="w-nav-overlay-0" aria-haspopup="menu"
                     aria-expanded="false"><img src={MenuIcon} width="20" alt="ICON" className="menu-icon"></img>
                </div>
                </div>
            </div>
        </div>
    </div>
);}
