import * as React from "react";
import { Link as SmoothLink } from 'react-scroll';
import { useState } from "react";
import '../../../node_modules/animate.css/animate.css';
import { BsArrowDown } from "react-icons/bs";
import DownloadApple from "../../../static/images/DW-Apple.svg";
import DownloadGoogle from "../../../static/images/DW-Google.svg";

export default function InnerHero( { heroObj } ){

    return (
        <section id="inner-hero" className="inner_hero">
            <div className="padding-global">
                <div className="container-large">
                    <div className="hero_content-wrapper padding-vertical padding-large">
                        <div className="title_wrapper_hero max-width-large" >
                            <div className="center-content z-index-1">
                                <div className="">
                                    <div className="heading-style-h4 text-align-center text-color-primary text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">
                                        {heroObj.titleObj.h1}
                                    </div>
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
                                <div className="tabs-menu goToLink w-tab-menu">
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

            </div>
        </section>
    );
}
