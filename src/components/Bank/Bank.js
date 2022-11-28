import * as React from "react";
import "../../../node_modules/animate.css/animate.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {bankContent, bankItems} from "./bankItem";

export default function Bank(){
    return (
        <section id="bank-section" className="section_bank">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="bank_wrapper margin-bottom">
                            <AnimationOnScroll  animateIn="animate__fadeInUp" animateOnce={true}
                                                className="bank_wrapper-left z-index-1 margin-vertical margin-large padding-horizontal padding-medium">
                                <div className="bank-image-comming-soon">COMMING SOON</div>
                                <h2 className="heading-style-h2 slide-from-bottom">{bankContent.head2}</h2>
                                <h3 className="heading-style-h5 margin-vertical margin-small slide-from-bottom">Wherever you are</h3>
                                <p className="text-color-darkgrey text-size-medium margin-bottom margin-huge slide-from-bottom">{bankContent.paragraph}</p>
                                <a target="_blank"  rel="noreferrer" href={bankContent.firebasePage}
                                   className="button firebase is-large with-icon width-260 w-inline-block">
                                    <div>Learn More</div>
                                    <img src="/images/partners/arrow-right-primary.svg" loading="lazy" alt=""></img>
                                </a>
                            </AnimationOnScroll>
                            <div className="bank_wrapper-right">
                                <div className="image-holder">
                                    <img loading="lazy" alt="changex bank"
                                         src={"/images/bank/img-bank-p-1060.png"}
                                         className="bank-image margin-vertical margin-large">
                                    </img>
                                </div>
                            </div>

                        </div>

                        <div className="spacer spacer-huge"></div>
                        <h3 className="heading-style-h3 margin-vertical margin-large">{bankContent.head3}</h3>

                        <div className="w-layout-grid grid-3">
                            {bankItems.map((item,index) => {
                                return(
                                    <div id={index.toString()} className="box-container-bank">
                                        <div className="padding-medium">
                                            <div className="icon-wrapper icon-card margin-bottom margin-large">
                                                <img src={item.src} loading="lazy" alt={item.title} className="icon" />
                                            </div>
                                            <h4 className="heading-style-h5 card-title margin-top margin-large">
                                                <strong>{item.title}</strong>
                                            </h4>
                                            <p className="text-color-darkgrey card-text">{item.text}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
