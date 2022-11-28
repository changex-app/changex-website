import * as React from "react";
import { Link as SmoothLink } from 'react-scroll';
import '../../../node_modules/animate.css/animate.css';
import DownloadApple from "../../../static/images/DW-Apple.svg"
import DownloadGoogle from "../../../static/images/DW-Google.svg"

export default function Hero( { heroObj } ){
    return (
        <section id="hero" className="section_hero">
            <div className="padding-global">
                <div className="container-large">
                    <div className="hero_content-wrapper padding-vertical padding-large">
                        <video className='videoTag' autoPlay loop muted>
                            <source src="/images/Hero_Video_color.mp4" type='video/mp4' />
                        </video>
                        <div className="title_wrapper max-width-large" >
                            <div className="center-content z-index-1">
                                <div className="text-cut-off">
                                    <div>
                                        <div
                                            className="heading-style-h4 text-align-center text-color-primary text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">
                                            {heroObj.titleObj.h1}
                                        </div>
                                    </div>
                                </div>
                                <div className="margin-vertical margin-small ">
                                    <div
                                         className="text-cut-off">
                                        <h1 className="heading-style-h1 text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">
                                            {heroObj.titleObj.h2}
                                        </h1>
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
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="hero_text-wrapper animate__animated animate__fadeInUp animate__delay-800ms">
                            <p className="max-width-large align-center text-align-center text-size-medium text-left-mobile">
                                Manage, invest, and grow your wealth with a Euro bank account, access to crypto, and DeFi
                                investment tools. Spend anywhere with the Changex&nbsp;
                                <SmoothLink to="card" smooth={true} className="text-style-link">{heroObj.titleObj.titleWithLink}</SmoothLink>
                            </p>
                            <div className="is-qr-hero w-inline-block">
                                <img src="/images/download-qr.svg" loading="lazy" width="75"
                                     alt="Changex QR code"
                                     className="qr-small-cta">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
