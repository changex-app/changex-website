import * as React from "react";
import "../../../node_modules/animate.css/animate.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {bankContent, bankItems} from "./bankItem";



export default function Bank(){
    return (
        <section id="bank" className="section_bank">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="bank_wrapper margin-bottom margin-xhuge">
                            <div className="bank_wrapper-left">
                                <div className="image-holder">
                                    <img loading="lazy"
                                         srcSet="/images/bank/img-bank-p-500.jpeg 500w, /images/bank/img-bank-p-800.jpeg 800w, /images/bank/img-bank-p-1080.jpeg 1080w, /images/bank/img-bank-p-1600.jpeg 1600w, /images/bank/img-bank.jpeg 2306w"
                                         sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 100vw"
                                         className="bank-image margin-vertical margin-large">
                                    </img>
                                    <div className="image-circle bottom-right"></div>
                                </div>
                            </div>
                            <AnimationOnScroll  animateIn="animate__fadeInUp" animateOnce={true}
                                className="bank_wrapper-right z-index-1 margin-vertical margin-large padding-horizontal padding-medium">
                                <h2 className="heading-style-h2 slide-from-bottom">{bankContent.head2}</h2>
                                <h3 className="heading-style-h5 margin-vertical margin-small slide-from-bottom">Wherever you are</h3>
                                <p className="text-color-darkgrey text-size-medium margin-bottom margin-huge slide-from-bottom">{bankContent.paragraph}</p>
                                <a target="_blank" href={bankContent.firebasePage}
                                   className="button is-large with-icon width-260 w-inline-block">
                                    <div>Read Whitepaper</div>
                                    <img src="/images/partners/arrow-right-primary.svg" loading="lazy" alt=""></img>
                                </a>
                            </AnimationOnScroll>
                        </div>

                        <div className="spacer spacer-huge"></div>
                        <h3 className="heading-style-h3 margin-vertical margin-large">{bankContent.head3}</h3>

                        <div className="w-layout-grid grid-3">
                            {bankItems.map((item,index) => {
                                return(
                                    <div id={index.toString()} className="box-container">
                                        <div className="padding-medium">
                                            <div className="icon-wrapper margin-bottom margin-large">
                                                <img src={item.src} loading="lazy" alt={item.title} className="icon" />
                                            </div>
                                            <h4 className="heading-style-h5 margin-top margin-large">
                                                <strong>{item.title}</strong>
                                            </h4>
                                            <p className="text-color-darkgrey">{item.text}</p>
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
