import * as React from "react";
import { Link as SmoothLink } from "react-scroll";
import "../../../node_modules/animate.css/animate.css";
import { TitleHero } from "../Title";

export default function Hero({ heroObj }) {
    return (
        <section id="hero" className="section_hero">
            <div className="padding-global">
                <div className="container-hero">
                    <TitleHero contentObj={heroObj} />
                    <video className="videoTag" autoPlay loop muted>
                        <source src="/images/Hero_Video_color.mp4" type="video/mp4" />
                    </video>
                    <div className="hero_text-wrapper animate__animated animate__fadeInUp animate__delay-800ms">
                        <p
                            className="heading-style-h6 max-width-large
                            align-center text-align-center text-size-medium
                            text-left-mobile"
                        >
                            {heroObj.titleObj.h4}&nbsp;
                            <SmoothLink to="card" smooth={true} className="text-style-link">
                                {heroObj.titleObj.titleWithLink}
                            </SmoothLink>
                        </p>
                        <div className="button is-qr w-inline-block">
                            <img
                                src="/images/download-qr.svg"
                                loading="lazy"
                                width="75"
                                alt="Changex QR code"
                                className="qr-small-cta"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
