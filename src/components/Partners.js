import * as React from "react";
import hydrachain from "/static/images/partners/hydra-logo.webp";
import locktrip from "/static/images/partners/locktrip_logo.svg";
import bitcoingold from "/static/images/partners/logo-btg-1.png";
import unifarm from "/static/images/partners/unifrarm-logo.png";
import stakingrewards from "/static/images/partners/stakingrewards.svg";

export const logosParners = [
    {
        href: 'https://hydrachain.org/',
        src: hydrachain,
        name: 'cointelegraph logo'
    },
    {
        href: 'https://locktrip.com/',
        src: locktrip,
        name: 'bloomberg logo'
    },
    {
        href: 'https://bitcoingold.org/',
        src: bitcoingold,
        name: 'cryptoslate logo'
    },
    {
        href: 'https://unifarm.co/',
        src: unifarm,
        name: 'cryptopotato logo'
    },
    {
        href: 'https://www.stakingrewards.com/',
        src: stakingrewards,
        name: 'cryptopotato logo'
    }

]
export default function Partners() {
    return(
        <section className="section_partners animate__animated animate__fadeInUp">
            <div className="padding-global">
                <div>
                    <div className="padding-section-small">
                        <div className="max-width-xlarge align-center text-align-center slide-from-bottom">
                            <h3 className="heading-style-h4 slide-from-bottom"><strong>Our partners</strong></h3>
                            <p className="text-size-large text-color-darkgrey margin-bottom margin-medium">Revolutionizing
                                personal finance one community at a time.</p>
                            <div r-marquee="24" className="logo-group r-marquee">
                                <div className="logos-wrapper r-marquee-wrapper-left">
                                    {logosParners.map((logo, index) => {
                                        return(
                                            <a href={logo.href}
                                               className="logo-link w-inline-block">
                                                <img src={logo.src}
                                                     loading="lazy" width="75"
                                                     alt={logo.name}
                                                     className="logo logo-max-width-200">
                                                </img>
                                            </a>
                                        )})}
                                </div>
                                <div className="logos-wrapper r-marquee-wrapper-left">
                                    {logosParners.map((logo, index) => {
                                        return(
                                            <a href={logo.href}
                                               className="logo-link w-inline-block">
                                                <img src={logo.src}
                                                     loading="lazy" width="75"
                                                     alt={logo.name}
                                                     className="logo logo-max-width-200">
                                                </img>
                                            </a>
                                        )})}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
