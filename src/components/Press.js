import * as React from "react";
import {iconItems} from "./Nav";
import 'animate.css';

import Cointelegraph from "/static/images/press/Cointelegraph_logo-p-500.png";
import Bloomberg from "/static/images/press/New_Bloomberg_Logo.svg";
import Cryptoslate from "/static/images/press/cs-media-logo-light.png";
import Cryptopotato from "/static/images/press/cryptopotato-logo-200px.png";


export const logos = [
    {
        href: 'https://cointelegraph.com/press-releases/cedefi-project-changex-fills-ico-quota-two-months-ahead-of-schedule',
        src: Cointelegraph,
        name: 'cointelegraph logo'
    },
    {
        href: 'https://www.bloomberg.com/press-releases/2022-08-01/defi-project-changex-launches-its-change-token-on-uniswap-hydradex-to-strong-investor-interest',
        src: Bloomberg,
        name: 'bloomberg logo'
    },
    {
        href: 'https://cryptoslate.com/press-releases/defi-project-changex-lands-advisory-board-from-major-industry-giants-oversubscribes-ico-by-180/',
        src: Cryptoslate,
        name: 'cryptoslate logo'
    },
    {
        href: 'https://cryptopotato.com/cedefi-project-changex-fills-ico-quota-two-months-ahead-of-schedule/',
        src: Cryptopotato,
        name: 'cryptopotato logo'
    },

]

export default function Press() {
    return(
        <section className="section_press animate__animated animate__fadeInUp">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-small slide-from-bottom">
                        <div className="max-width-large align-center text-align-center">
                            <h3 className="heading-style-h5 margin-bottom margin-medium">As seen on</h3>
                            <div className="logo-group r-marquee">
                                <div className="logos-wrapper r-marquee-wrapper-left">
                                    {logos.map((logo, index) => {
                                        return(
                                                <a href={logo.href}
                                                   className="logo-link w-inline-block">
                                                    <img
                                                        src={logo.src}
                                                        loading="lazy"
                                                        width="250"
                                                        alt={logo.name}
                                                        className="logo-max-width-200">
                                                    </img>
                                                </a>
                                        )
                                    })}
                                </div>
                                <div className="logos-wrapper r-marquee-wrapper-left">
                                    {logos.map((logo, index) => {
                                        return(
                                            <a href={logo.href}
                                               className="logo-link w-inline-block">
                                                <img
                                                    src={logo.src}
                                                    loading="lazy"
                                                    width="250"
                                                    alt={logo.name}
                                                    className="logo-max-width-200">
                                                </img>
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
