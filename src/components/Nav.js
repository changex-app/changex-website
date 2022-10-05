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

export const menuItems = [
    {
        title: 'Wealth',
        url: '/wealth',
        id: 'wealth',
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
        id: 'bank',
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
        id: 'wallet',
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

export default function Navigation() {
    return (
        <div className="container-large is-nav w-container">
            <div className="nav_full-wrapper">
                <div className="nav_left-wrapper">
                    <a className="nav_brandlink margin-right margin-small w-nav-brand"><img src={ChangeXLogoColor} loading="lazy" alt="ChangeX Logo in navigation bar" className="nav_logo"></img></a>
                    <nav role="navigation" className="nav_menu-links w-nav-menu">
                        <ul className="menus nav_menu-links w-nav-menu">
                            {menuItems.map((menu, index) => {
                                return (
                                   /* <li className="nav_link w-nav-link" style={{maxWidth: "1376px"}} key={index}>
                                        <a className="nav_link w-nav-link" style={{marginBottom: "0rem"}} href={menu.url}>{menu.title}</a>
                                    </li>*/
                                    <Dropdown placeholder={menu.title}  className={menu.className}/>
                                );
                            })}
                        </ul>
                        <div className="hide-desktop">
                            <div className="nav_right-wrapper margin-top margin-huge">
                                <div className="nav_stats-wrapper">
                                    <div className="padding-small">
                                        <div id="changexPrice2" className="text-size-tiny changexprice">$CHANGEprice</div>
                                    </div>
                                </div>
                                <div className="nav_stats-wrapper">
                                    <div className="padding-small">
                                        <div id="changexApy2" className="text-size-tiny text-color-black changexapy">$CHANGEAPY<strong></strong></div>
                                    </div>
                                </div>
                                <div className="button-group centered-items margin-top margin-large spread max-width-full-mobile-landscape">
                                    <a href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"  className="button is-store max-width-full-mobile-landscape w-inline-block"><img src={DwApple} loading="lazy" alt="Apple app store image" width="150"></img></a>
                                    <a href="https://play.google.com/store/apps/details?id=io.changex.app"  className="button is-store max-width-full-mobile-landscape w-inline-block"><img src={DwGoogle} loading="lazy" width="150" alt="Google Play store image"></img></a>
                                    <a href="https://urlgeni.us/changexapp"  className="button is-qr w-inline-block"><img src={QRBlack} loading="lazy" width="75" alt="QR Code" className="qr-small"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="nav_right-wrapper hide-mobile-landscape">
                    <div className="nav_stats-wrapper">
                        <div className="padding-small">
                            <div id="changexPrice" className="text-size-tiny changexprice">$CHANGprice</div>
                        </div>
                    </div>
                    <div className="nav_stats-wrapper">
                        <div className="padding-small">
                            <div id="changexApy" className="text-size-tiny text-color-black changexapy">$CHANGAPY<strong></strong></div>
                        </div>
                    </div>
                    <ul className="nav_download-wrapper w-list-unstyled">
                        <li className="nav_download-item">
                            <a href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"  className="nav_download-btn w-inline-block"><img src={AppleBlackIcon} loading="lazy" width="21"></img></a>
                        </li>
                        <li className="nav_download-item">
                            <a href="https://play.google.com/store/apps/details?id=io.changex.app"  className="nav_download-btn w-inline-block"><img src={PlaystoreBlackIcon} loading="lazy" width="21"></img></a>
                        </li>
                        <li className="nav_download-item qr-icon">
                            <a data-w-id="2d1d292f-3b75-27de-c295-652c0aa8248c" href="#" className="nav_download-btn w-inline-block"><img src={QRBlack} loading="lazy" width="21"></img></a>
                        </li>
                    </ul>
                </div>
                <div className="menu-button w-nav-button"><img src={MenuIcon} width="20" alt="" className="menu-icon"></img></div>
                {/*<div className="menu-button w-nav-button"  aria-label="menu" role="button" tabIndex="0"
                     aria-controls="w-nav-overlay-0" aria-haspopup="menu"
                     aria-expanded="false"><img src={MenuIcon} width="20" alt="ICON" className="menu-icon"></img>
                </div>*/}
            </div>
        </div>
);}
