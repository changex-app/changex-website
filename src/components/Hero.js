import * as React from "react";
import 'animate.css';
import HeroBGImageMobile from "/static/images/Hero-BGimg-mobile.png"
import DownloadApple from "/static/images/DW-Apple.svg"
import DownloadGoogle from "/static/images/DW-Google.svg"
import DownloadQR from "/static/images/download-qr.svg"
import Typography from "@mui/material/Typography";
import {Box, Modal} from "@mui/material";
import {useState} from "react";
import {ScanQrModal} from "../Utils/ScanQrCode";

export default function Hero(){

    const [showModal, setShowModal] = useState(false)

    function openModal() {
        setShowModal(true);
    }

    return (
        <section id="hero" className="section_hero">
            <img src={HeroBGImageMobile} loading="lazy" className="image-hero"></img>
            <div className="hero2 hero-background animate__animated animate__fadeInLeft"></div>
            <div className="hero3 hero-background right animate__animated animate__fadeInRight"></div>
            <div className="padding-global">
                <div className="container-large">
                    <div className="hero_content-wrapper padding-vertical padding-large">
                        <div className="title_wrapper max-width-large align-center" >
                            <div className="center-content z-index-1">
                                <div className="">
                                    <div data-w-id="4e7d7ce0-612b-5363-0716-46922c664478"
                                         className="hero4 text-cut-off">
                                        <div
                                            className="heading-style-h4 text-align-center text-color-primary text-left-mobile animate__animated animate__fadeInUp">Money
                                            matters → Made Simple
                                        </div>
                                    </div>
                                </div>
                                <div className="text-align-center margin-vertical margin-small ">
                                    <div data-w-id="efcf5b57-ab08-af36-3e4f-c82f3a613a0a"
                                         className="hero1 text-cut-off">
                                        <h1 className="heading-style-h1 text-left-mobile animate__animated animate__fadeInUp">
                                            Mobile banking meets decentralized finance
                                        </h1>
                                    </div>
                                </div>
                                <div data-w-id="d49aa841-14fa-a4f0-05ef-cc82444d06cd" style={{opacity:1}}
                                     className=" animate__animated animate__zoomIn button-group centered-items margin-top margin-large spread max-width-full-mobile-landscape">
                                    <a target="_blank" href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"
                                       className="button is-store max-width-full-mobile-landscape w-inline-block">
                                        <img src={DownloadApple} loading="lazy" width="150"></img>
                                    </a>
                                    <a target="_blank" href="https://play.google.com/store/apps/details?id=io.changex.app"
                                       className="button is-store max-width-full-mobile-landscape w-inline-block">
                                        <img src={DownloadGoogle} loading="lazy" width="150"></img>
                                    </a>
                                    <a onClick={openModal} data-w-id="a77f28b0-f749-034d-c5c6-5f870664bf00" href="#"
                                       className="button is-qr w-inline-block">
                                        <img src={DownloadQR}
                                             loading="lazy" width="75"
                                             alt="QR code image"
                                             className="qr-small">
                                        </img><p className="text-align-left text-size-regular" style={{width: "min-content"}}>Scan To Download</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="hero_text-wrapper margin-top margin-huge animate__animated animate__fadeInUp">
                            <p data-w-id="a20e1489-4544-68cd-4c9e-a22080e2671d" style={{opacity:1}}
                               className="max-width-large align-center text-align-center text-size-medium text-left-mobile">Manage,
                                invest, and grow your wealth with a Euro bank account, access to crypto, and DeFi
                                investment tools. Spend anywhere with the Changex
                                <a href="" className="text-style-link">Crypto Debit Card.</a>
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
