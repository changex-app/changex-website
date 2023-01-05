import * as React from 'react'
import DownloadApple from "../../../static/images/DW-Apple.svg";
import DownloadGoogle from "../../../static/images/DW-Google.svg";
import QRWhite from "../../../static/images/icn-qr-white.svg";
import {BsArrowDown} from "react-icons/bs";
import Advantages from "../Advantages/Advantages";
import {advantages} from "../Token/tokenPageItems";
import {perksArray} from "../aboutItems";
import Perks from "../Perks";
import {bankItems} from "../Bank/bankItem";

export default function AboutHero( { heroObj } ){
    return (
        <section id="inner-hero">
            <div className="padding-global relative">
                <div className="container-large ">
                    <div id="inner-hero-title" className="hero_about_content-wrapper padding-vertical padding-small">
                        <div className="title_wrapper_hero_about max-width-large animate__animated animate__fadeInUp animate__delay-1s" >
                            <div className="center-content z-index-1">
                                <div className="">
                                    <h6 className="heading-style-h6  text-color-primary text-left-mobile">
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
                                    <div className="text-weight-normal animate__animated animate__fadeInUp animate__delay-1s">
                                        {heroObj.titleObj.h3}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>

                        </div>
                        <div>
                            <h1>

                            </h1>
                            <p>

                            </p>
                        </div>
                    </div>
                    <div className="w-layout-grid grid-2">
                        <Perks perksArray={perksArray}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
