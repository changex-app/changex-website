import * as React from "react";
import { Link as SmoothLink } from 'react-scroll';
import { Modal } from "@mui/material";
import { useState } from "react";
import { ScanQrModal } from "../../Utils/ScanQrCode";
import { StaticImage } from "gatsby-plugin-image";
import '../../../node_modules/animate.css/animate.css';
import DownloadApple from "../../../static/images/DW-Apple.svg"
import DownloadGoogle from "../../../static/images/DW-Google.svg"
import DownloadQR from "../../../static/images/download-qr.svg"

export default function Hero( {heroObj} ){

    const [showModal, setShowModal] = useState(false)

    function openModal() {
        setShowModal(true);
    }

    return (
        <section id="hero" className="section_hero">
            <StaticImage src={"../../../static/images/Hero-BGimg-mobile.png"} loading="lazy" className="image-hero" alt=""></StaticImage>
            <div className="hero-background animate__animated animate__fadeInLeft animate__delay-800ms"></div>
            <div className="hero-background right animate__animated animate__fadeInRight animate__delay-800ms"></div>
            <div className="padding-global">
                <div className="container-large">
                    <div className="hero_content-wrapper padding-vertical padding-large">
                        <div className="title_wrapper max-width-large align-center" >
                            <div className="center-content z-index-1">
                                <div className="">
                                    <div className="text-cut-off">
                                        <div
                                            className="heading-style-h4 text-align-center text-color-primary text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">
                                            {heroObj.titleObj.h1}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-align-center margin-vertical margin-small ">
                                    <div
                                         className="text-cut-off">
                                        <h1 className="heading-style-h1 text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">
                                            {heroObj.titleObj.h2}
                                        </h1>
                                    </div>
                                </div>
                                <div className="animate__animated animate__zoomIn animate__delay-1s button-group centered-items margin-top margin-large spread max-width-full-mobile-landscape">
                                    <a target="_blank"  rel="noreferrer" href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"
                                       className="button is-store max-width-full-mobile-landscape w-inline-block">
                                        <img src={DownloadApple} alt="Apple" loading="lazy" width="150"></img>
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=io.changex.app"
                                       className="button is-store max-width-full-mobile-landscape w-inline-block">
                                        <img src={DownloadGoogle} alt="Google" loading="lazy" width="150"></img>
                                    </a>
                                    <button onClick={openModal}
                                       className="button is-qr w-inline-block">
                                        <img src={DownloadQR}
                                             loading="lazy" width="75" height="50"
                                             alt="Changex QR code"
                                             className="qr-small">
                                        </img>
                                        <p className="text-align-left text-size-regular scan">Scan To Download</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="hero_text-wrapper margin-top margin-huge animate__animated animate__fadeInUp animate__delay-800ms">
                            <p className="max-width-large align-center text-align-center text-size-medium text-left-mobile">
                                Manage, invest, and grow your wealth with a Euro bank account, access to crypto, and DeFi
                                investment tools. Spend anywhere with the Changex&nbsp;
                                <SmoothLink to="card" smooth={true} className="text-style-link">{heroObj.titleObj.titleWithLink}</SmoothLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={showModal}>
                <ScanQrModal className="section-scanpopup wf-section"
                    showModal={showModal}
                    setShowModal={setShowModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                </ScanQrModal>
            </Modal>
        </section>
    );
}
