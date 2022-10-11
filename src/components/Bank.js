import * as React from "react";
import "animate.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Bank(){
    return (
        <section id="bank" className="section_bank">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="bank_wrapper margin-bottom margin-xhuge">
                            <div className="bank_wrapper-left">
                                <div className="image-holder"><img loading="lazy"
                                                                   srcSet="/images/bank/img-bank-p-500.jpeg 500w, /images/bank/img-bank-p-800.jpeg 800w, /images/bank/img-bank-p-1080.jpeg 1080w, /images/bank/img-bank-p-1600.jpeg 1600w, /images/bank/img-bank.jpeg 2306w"
                                                                   sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 100vw"
                                                                   className="bank-image margin-vertical margin-large"></img>
                                    <div className="image-circle bottom-right"></div>
                                </div>
                            </div>
                            <AnimationOnScroll  animateIn="animate__fadeInUp" animateOnce={true}
                                className="bank_wrapper-right z-index-1 margin-vertical margin-large padding-horizontal padding-medium">
                                <h2 className="heading-style-h2 slide-from-bottom">A bank that understands you</h2>
                                <h3 className="heading-style-h5 margin-vertical margin-small slide-from-bottom">Wherever
                                    you are</h3>
                                <p className="text-color-darkgrey text-size-medium margin-bottom margin-huge slide-from-bottom">Easily
                                    send, receive, and spend Euro in 36 countries from your SEPA bank account, while
                                    keeping your crypto close. Pay for services. Shop. Changex removes the clutter while
                                    you focus on life.</p>
                                <a href="https://firebasestorage.googleapis.com/v0/b/changex-io.appspot.com/o/changex-whitepaper-v4.pdf?alt=media&amp;token=85d7033d-ce62-4fd2-aefd-b50f2a758530"
                                   className="button is-large with-icon width-260 w-inline-block">
                                    <div>Read Whitepaper</div>
                                    <img src="/images/partners/arrow-right-primary.svg" loading="lazy" alt=""></img>
                                </a>
                            </AnimationOnScroll>
                        </div>

                        <div className="spacer spacer-huge"></div>
                        <h3 className="heading-style-h3 margin-vertical margin-large">Crypto-friendly banking for the new
                            age.</h3>
                        <div className="w-layout-grid grid-3">
                            <div id="w-node-_2c279a28-c0b8-325e-b8e2-bcc31a01d970-0541c3c1" className="box-container">
                                <div className="padding-medium">
                                    <div className="icon-wrapper margin-bottom margin-large"><img
                                        src="/images/bank/Bank-in-your-wallet.svg" loading="lazy" alt="" className="icon"></img></div>
                                    <h4 className="heading-style-h5 margin-top margin-large"><strong>Banking in the
                                        Wallet</strong></h4>
                                    <p className="text-color-darkgrey">Simplify life with the world’s first true bank account
                                        integrated into a DeFi wallet.</p>
                                </div>
                            </div>
                            <div id="w-node-a0f09619-8011-36d3-966f-0230e0c15cc1-0541c3c1" className="box-container">
                                <div className="padding-medium">
                                    <div className="icon-wrapper margin-bottom margin-large"><img src="/images/bank/SEPA-Transfer.svg"
                                                                                                  loading="lazy" alt=""></img></div>
                                    <h4 className="heading-style-h5 margin-top margin-large"><strong>Easy SEPA
                                        transactions</strong></h4>
                                    <p className="text-color-darkgrey">Receive your salary, send money to your family, or
                                        transact in 36 countries across Europe.</p>
                                </div>
                            </div>
                            <div id="w-node-_24ef7765-8c4f-f5ea-cab5-d749bb300a89-0541c3c1" className="box-container">
                                <div className="padding-medium">
                                    <div className="icon-wrapper margin-bottom margin-large"><img src="/images/bank/Safety-First.svg"
                                                                                                  loading="lazy" width="100"
                                                                                                  alt=""></img></div>
                                    <h4 className="heading-style-h5 margin-top margin-large"><strong>Security first</strong>
                                    </h4>
                                    <p className="text-color-darkgrey">Changex will act as a licensed agent of one of the best
                                        Electronic Money Institutions in the space. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
