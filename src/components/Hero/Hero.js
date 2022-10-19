import * as React from "react";
import '../../../node_modules/animate.css/animate.css';
import DownloadApple from "../../../static/images/DW-Apple.svg"
import DownloadGoogle from "../../../static/images/DW-Google.svg"
import DownloadQR from "../../../static/images/download-qr.svg"
import { Modal } from "@mui/material";
import { useState } from "react";
import { ScanQrModal } from "../../Utils/ScanQrCode";
import {StaticImage} from "gatsby-plugin-image";

export default function Hero(){

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
                                            className="heading-style-h4 text-align-center text-color-primary text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">Money
                                            matters → Made Simple
                                        </div>
                                    </div>
                                </div>
                                <div className="text-align-center margin-vertical margin-small ">
                                    <div
                                         className="text-cut-off">
                                        <h1 className="heading-style-h1 text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">
                                            Mobile banking meets decentralized finance
                                        </h1>
                                    </div>
                                </div>
                                <div style={{opacity:1}}
                                     className=" animate__animated animate__zoomIn animate__delay-1s button-group centered-items margin-top margin-large spread max-width-full-mobile-landscape">
                                    <a target="_blank" href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"
                                       className="button is-store max-width-full-mobile-landscape w-inline-block">
                                        <img src={DownloadApple} loading="lazy" width="150"></img>
                                    </a>
                                    <a target="_blank" href="https://play.google.com/store/apps/details?id=io.changex.app"
                                       className="button is-store max-width-full-mobile-landscape w-inline-block">
                                        <img src={DownloadGoogle} loading="lazy" width="150"></img>
                                    </a>
                                    <a onClick={openModal}  href="src/components/Hero/Hero#"
                                       className="button is-qr w-inline-block">
                                        <img src={DownloadQR}
                                             loading="lazy" width="75" height="50"
                                             alt="QR code image"
                                             className="qr-small">
                                        </img><p className="text-align-left text-size-regular" style={{width: "min-content"}}>Scan To Download</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="hero_text-wrapper margin-top margin-huge animate__animated animate__fadeInUp animate__delay-800ms">
                            <p  style={{opacity:1}}
                               className="max-width-large align-center text-align-center text-size-medium text-left-mobile">Manage,
                                invest, and grow your wealth with a Euro bank account, access to crypto, and DeFi
                                investment tools. Spend anywhere with the Changex
                                <a href="src/components/Hero/Hero" className="text-style-link">Crypto Debit Card.</a>
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
