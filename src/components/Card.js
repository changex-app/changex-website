import * as React from "react";
import "animate.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Card() {
    return (
        <section id="card" className="section_card overflow-hidden">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="card_wrapper margin-bottom margin-xhuge">
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp"
                                className="bank_wrapper-left z-index-1 margin-vertical margin-large padding-horizontal padding-medium">
                                <h2 className="heading-style-h2 slide-from-bottom"><strong>Meet Your Crypto Debit
                                    Card</strong></h2>
                                <h3 className="heading-style-h5 margin-vertical margin-small slide-from-bottom">Virtual
                                    or physical - it’s always there for you.</h3>
                                <p className="text-size-large">Connected to your
                                    wallet and bank account, the Changex Crypto Debit Card lets you spend anything,
                                    anywhere. Yes, Euro and any crypto token in the app. Just choose whatever works best
                                    for you.</p>
                            </AnimationOnScroll>
                            <div className="bank_wrapper-right">
                                <div className="image-holder card-image"><img src="/images/card/img-card-bg.png"
                                                                              loading="lazy"
                                                                              srcSet="/images/card/img-card-bg-p-500.png 500w, /images/card/img-card-bg-p-800.png 800w, /images/card/img-card-bg-p-1080.png 1080w, /images/img-card-bg-p-1600.png 1600w, /images/card/img-card-bg-p-2000.png 2000w, /images/card/img-card-bg.png 2306w"
                                                                              sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 100vw"
                                                                              alt=""
                                                                              className="image-card margin-vertical margin-large"></img>
                                    <div className="image-circle is-bigger top-left"></div>
                                    <img src="/images/card/cards-img.png" loading="lazy"
                                         sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 50vw"
                                         srcSet="/images/card/cards-img-p-500.png 500w, /images/card/cards-img.png 729w" alt=""
                                         className="image-2"></img>
                                </div>
                            </div>
                        </div>
                        <div className="spacer spacer-huge"></div>
                        <h3 className="heading-style-h3 margin-vertical margin-large">More than a card - it’s
                            freedom</h3>
                        <div className="w-layout-grid grid-4">
                            <div  className="box-container">
                                <div className="padding-medium">
                                    <div className="icon-wrapper margin-bottom margin-medium"><img
                                        src="/images/currency.svg" loading="lazy" alt="" className="icon"></img></div>
                                    <p className="margin-top margin-large">Choose your card’s currency in one click -
                                        Euro or any available token.</p>
                                </div>
                            </div>
                            <div className="box-container">
                                <div className="padding-medium">
                                    <div className="icon-wrapper margin-bottom margin-medium"><img
                                        src="/images/staking.svg" loading="lazy" alt="" width="102" className="icon"></img>
                                    </div>
                                    <p className="margin-top margin-large">Spend staked assets without interrupting the
                                        flow of rewards.</p>
                                </div>
                            </div>
                            <div className="box-container">
                                <div className="padding-medium">
                                    <div className="icon-wrapper margin-bottom margin-medium"><img
                                        src="/images/cashback.svg" loading="lazy" alt="" width="116.5" className="icon"></img>
                                    </div>
                                    <p className="margin-top margin-large">Earn cashback on spending and unlock unique
                                        benefits in the app.</p>
                                </div>
                            </div>
                            <div className="box-container">
                                <div className="padding-medium">
                                    <div className="icon-wrapper margin-bottom margin-medium"><img
                                        src="/images/your-money.svg" loading="lazy" alt="" width="103.5"
                                        className="icon"></img></div>
                                    <p className="margin-top margin-large">Virtual and physical cards cover all needs -
                                        your money, your way.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
