import * as React from "react";
import '../../../node_modules/animate.css/animate.css';
import { BsArrowDown } from "react-icons/bs";
import Advantages from "../Advantages/Advantages";
import { advantages } from "../Token/tokenPageItems";
import { useEffect, useState } from "react";
import { fetchApy, fetchPrice } from "../../api/fetch";
import DropDownButton from "../DropownButton";
import DownloadApple from "../../../static/images/DW-Apple.svg";
import DownloadGoogle from "../../../static/images/DW-Google.svg";
import QRWhite from "../../../static/images/icn-qr-white.svg";
import {ScanQrModal} from "../../Utils/ScanQrCode";
import {Modal} from "@mui/material";

export default function InnerHero( { heroObj } ){

    const [apy, setApy] = useState('$CHANGE');
    const [price, setPrice] = useState('$CHANGE');
    const [showModal, setShowModal] = useState(false)

    function openModal() {
        setShowModal(true);
    }

    const dropDownObj = [
        {
            link: 'https://app.uniswap.org/#/swap?inputCurrency=&outputCurrency=0x7051faed0775f664a0286af4f75ef5ed74e02754',
            image: '/images/social/uniswapImg.png',
            title: 'Uniswap'
        },
        {
            link: 'https://otc.mexc.com/en-US/fastTransaction',
            image: '/images/social/mexcImage.png',
            title: 'Mexc'
        },
        {
            link: 'https://hydradex.org/#/swap',
            image: '/images/social/hydraImg.png',
            title: 'Hydra Dex'
        }
    ]

    useEffect( () => {
        if (heroObj.class === "tokenPage") {
            fetchApy()
                .then(res => {
                    if (res && res.apy) {
                        setApy(res.apy.inPercent);
                    }
                })

            fetchPrice()
                .then(res => {
                    if (res && res.price) {
                        setPrice(res.price.current_price.toFixed(4));
                    }
                })


            setTimeout(fetchPrice,fetchApy, 30000);
        }
    },[])

    return (
        <section id="inner-hero" className={`${heroObj.class}`}>
            <div className={`padding-global`}>
                <div className="container-large">
                    <div className="hero_content-wrapper padding-vertical padding-large">
                        <div className="title_wrapper_hero max-width-large" >
                            <div className="center-content z-index-1">
                                <div className="">
                                    <h6 className="heading-style-h6 text-align-center text-color-primary text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">
                                        {heroObj.titleObj.h1}
                                    </h6>
                                </div>
                                <div className="margin-vertical margin-small ">
                                    <div className="">
                                        <h1 className="heading-style-h1 text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">
                                            {heroObj.titleObj.h2}
                                        </h1>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-align-center text-weight-normal animate__animated animate__fadeInUp animate__delay-1s">
                                        {heroObj.titleObj.h3}
                                    </div>
                                </div>
                                {heroObj.appBtnsVisible &&
                                    <div className="animate__animated animate__zoomIn animate__delay-1s button-group centered-items margin-top margin-large spread max-width-full-mobile-landscape">
                                        <a target="_blank"  rel="noreferrer" href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"
                                           className="button is-store max-width-full-mobile-landscape w-inline-block">
                                            <img src={DownloadApple} alt="Apple" loading="lazy" width="150"></img>
                                        </a>
                                        <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=io.changex.app"
                                           className="button is-store max-width-full-mobile-landscape w-inline-block">
                                            <img src={DownloadGoogle} alt="Google" loading="lazy" width="150"></img>
                                        </a>
                                        {heroObj.appBtnsVisible && heroObj.class === "walletPage" &&
                                            <button onClick={openModal}
                                                    className="button is-qr-hero w-inline-block">
                                                <img src={QRWhite} loading="lazy" width="75"
                                                     alt="Changex QR code"
                                                     className="qr-big">
                                                </img>
                                            </button>
                                        }
                                    </div>
                                }
                                    <div className={`${heroObj.scrollBtnText && heroObj.class === "tokenPage" ? '' : "hide"} infoWrapper`}>
                                        <div className="infoInnerWrapper">
                                            <div className="padding-small">
                                                <div id="changexPrice" className="text-size-tiny changexprice">$CHANGE:&nbsp;
                                                    <a target="_blank" rel="noreferrer" className="price-highlight" href="https://www.coingecko.com/en/coins/changex">
                                                        <span>{price}<img alt="changex coingecko" className="coingecko" src="/images/external_link.svg"/></span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="padding-small">
                                                <div id="changexApy" className="text-size-tiny text-color-black changexapy">$CHANGE&nbsp;APY:<strong> {apy}%</strong></div>
                                            </div>
                                            <DropDownButton dropDownData={dropDownObj}/>
                                        </div>
                                    </div>
                                    <div className={`${heroObj.scrollBtnText && heroObj.class !== "tokenPage" ? '' : 'hide'} tabs-menu goToLink w-tab-menu`}>
                                        <span className="tab-nav w-inline-block w--current">
                                            <div>
                                                {heroObj.scrollBtnText} <BsArrowDown/>
                                            </div>
                                        </span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${heroObj.class === "tokenPage" ? '' : "hide"}`}>
                    <Advantages className={`infoWrapper`} classGrid={'card-grid-token'} title={'A community-centric token'} advantages={ advantages }/>
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
        </section>
    );
}
