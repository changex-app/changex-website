import * as React from "react";
import ChangeXLogoColor from "/static/images/Logo_footer.svg";
import TelegramPlane from "/static/images/social/telegram.svg";
import CarbonLogo from "/static/images/social/carbon.svg";
import TwitterLogo from "/static/images/social/twitter.svg";
import FacebookLogo from "/static/images/social/facebook.svg";
import LinkedinLogo from "/static/images/social/linkedIn.svg";
import { Link } from "react-scroll";
import {menuItems} from "./Navbar/navItems";
import { useState } from "react";
import {Modal} from "@mui/material";
import {ScanQrModal} from "../Utils/ScanQrCode";

export default function Footer(){

    const [showModal, setShowModal] = useState(false)

    function openModal() {
        setShowModal(true);
    }

    return(
        <div className="section_footer wf-section">
            <div className="padding-global">
                <div className="container-large-footer">
                    <Link to="hero" smooth={true} className="footer_logo-wrapper w-inline-block">
                        <img src={ChangeXLogoColor} alt="changex logo" loading="lazy"></img>

                    </Link>
                    <div className="padding-section-small is-footer">
                        <div className="w-layout-grid footer-grid">
                            <div className="w-col w-col-6 w-col-stack">
                                <div className="text-size-small text-color-darkgrey">Copyright © 2022, Olympus Capital
                                    JSC,<br/> All trademarks and copyrights belong to their respective owners.</div>
                            </div>
                            <div className="button-group footer-group">
                                {menuItems.map((menu, index) => {
                                return (
                                    <Link target="_blank"  to={menu.url} className="button is-link w-inline-block">
                                        <div className="text-color-black">{menu.title}</div>
                                    </Link>
                                )})
                                }

                            </div>
                            <div className="button-group footer-group">
                                <a target="_blank" rel="noreferrer"  href="https://firebasestorage.googleapis.com/v0/b/changex-io.appspot.com/o/changex-whitepaper-v4.pdf?alt=media&amp;token=85d7033d-ce62-4fd2-aefd-b50f2a758530"
                                   className="button is-link w-inline-block">
                                    <div className="text-color-black">Whitepaper</div>
                                </a>
                                <a target="_blank"  rel="noreferrer" href="https://legacy.changex.io/"
                                   className="button is-link w-inline-block ">
                                    <div className="text-color-black">ICO Information</div>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://token.changex.io/"
                                   className="button is-secondary w-inline-block">
                                    <div>Investor&#x27;s Portal</div>
                                </a>
                            </div>
                            <div className="button-group centered-items margin-top spread align-left social">

                                <a target="_blank" rel="noreferrer" href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"
                                   className="button is-store-footer apple w-inline-block">
                                    <img src="/images/DW-Apple.svg"
                                         loading="lazy"
                                         alt="Changex App Store download"
                                         width="155"
                                         height="26">
                                    </img>
                                </a>


                                <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=io.changex.app"
                                   className="button is-store-footer google w-inline-block">
                                    <img src="/images/DW-Google.svg"
                                         loading="lazy"
                                         width="150"
                                         alt="Changex Google Play download">
                                    </img>
                                </a>

                                <button onClick={openModal}
                                        className="button is-qr-footer w-inline-block">
                                    <img src="/images/cta/icn-qr.svg" loading="lazy" width="75"
                                         alt="Changex QR code"
                                         className="qr-small">
                                    </img>
                                </button>

                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="w-col w-col w-col-stack">
                                <div className="button-group">
                                    <div className="w-col-3 legal_links_wrapper">
                                    <a target="_blank" rel="noreferrer" href="https://changex-io.web.app/privacy.html"
                                       className="legal_links text-size-small">Privacy Policy</a>
                                    <a target="_blank" rel="noreferrer" href="https://changex-io.web.app/terms.html"
                                       className="legal_links text-size-small">Terms of Service</a></div>
                                    <div className="w-col-stack w-col  button-group footer-links">
                                        <a target="_blank"  rel="noreferrer" href="https://t.me/changex_official"
                                           className="button social-link w-inline-block">
                                            <img src={TelegramPlane} alt="changex telegram" loading="lazy"></img>
                                        </a>
                                        <a target="_blank" rel="noreferrer" href="https://twitter.com/ChangeXapp"
                                           className="button social-link w-inline-block">
                                            <img src={TwitterLogo} alt="changex twitter" loading="lazy"></img>
                                        </a>
                                        <a target="_blank" rel="noreferrer" href="https://changex.medium.com/"
                                           className="button social-link w-inline-block">
                                            <img src={CarbonLogo} alt="changex" loading="lazy"></img>
                                        </a>
                                        <a target="_blank"  rel="noreferrer" href="https://www.facebook.com/ChangeXapp"
                                           className="button social-link w-inline-block">
                                            <img src={FacebookLogo} alt="changex facebook" loading="lazy"></img>
                                        </a>
                                        <a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/company/changexapp"
                                           className="button social-link w-inline-block">
                                            <img src={LinkedinLogo} alt="changex linkedin" loading="lazy"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={showModal}>
                <ScanQrModal className="section-scanpopup wf-section"
                             showModal={showModal}
                             setShowModal={setShowModal}
                             aria-labelledby="modal-modal-title"
                             aria-describedby="modal-modal-description">
                </ScanQrModal>
            </Modal>
        </div>
    )
}
