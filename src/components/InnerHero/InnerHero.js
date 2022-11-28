import * as React from "react";
import { Link as SmoothLink } from 'react-scroll';
import { useState } from "react";
import '../../../node_modules/animate.css/animate.css';
import { BsArrowDown } from "react-icons/bs";

export default function InnerHero( { heroObj } ){

    return (
        <section id="inner-hero" className="inner_hero">
            <div className="padding-global">
                <div className="container-large">
                    <div className="hero_content-wrapper padding-vertical padding-large">
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
                                    <div className="animate__animated animate__zoomIn animate__delay-1s button-group centered-items margin-top margin-large spread max-width-full-mobile-landscape">
                                        <a target="_blank"  rel="noreferrer" href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"
                                           className="button is-link max-width-full-mobile-landscape w-inline-block">
                                            {heroObj.titleObj.scrollBtnText} <BsArrowDown/>
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
