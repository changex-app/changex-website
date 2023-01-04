import * as React from "react";
import "../../../node_modules/animate.css/animate.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {bankContent, bankItems} from "./bankItem";

export default function Bank(){
    return (
        <section id="bank-section" className="section_bank">
            <div className="padding-global">
                <div className="container-large">
                    <div>
                        <div className="bank_wrapper margin-bottom">
                            <AnimationOnScroll  animateIn="animate__fadeInUp" animateOnce={true}
                                                className="bank_wrapper-left z-index-1 margin-vertical">
                                <div className="bank-image-comming-soon">COMMING SOON</div>
                                <h2 className="heading-style-h2 slide-from-bottom">{bankContent.head2}</h2>
                                <p className="text-color-darkgrey text-size-medium margin-bottom slide-from-bottom">{bankContent.paragraph}</p>
                                <a target="_blank"  rel="noreferrer" href={bankContent.firebasePage} className="button firebase is-large with-icon width-260 w-inline-block">
                                    Learn More
                                </a>
                            </AnimationOnScroll>
                            <div className="bank_wrapper-right image-holder bank-image">
{/*                                <div className="">

                                </div>*/}
                            </div>
                        </div>
                        <div className="spacer spacer-huge"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
