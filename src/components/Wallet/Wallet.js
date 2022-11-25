import * as React from "react";
import '../../../node_modules/animate.css/animate.css';
import 'react-slideshow-image/dist/styles.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { responsiveSliderData, scrollImages, slideImages } from "./walletItems";
import { useState } from "react";
import WalletSlider from "../Slider/walletSlider";

export default function Wallet() {

    let [itemIndex, SetItemIndex] = useState(0);

    async function onClickNav(idx) {
        console.warn('setni nna', idx)
        SetItemIndex(idx)
    }

    return (
        <section id="wallet" className="section_wallet">
            <div className="background-color-black">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="padding-section-large">
                            <div className="div-block">
                                <div className="wallet_wrapper-left">
                                    <div className="slider">
                                        <WalletSlider onClickNav={onClickNav} responsiveSliderData={responsiveSliderData} sliderData={slideImages}/>
                                    </div>
                                </div>
                                <AnimationOnScroll  animateIn="animate__fadeInUp" className="wallet_wrapper-right animate__animated animate__fadeInUp">
                                    <div style={{display: "flex"}}>
                                        <div className="label is-lime slide-from-bottom">{scrollImages[itemIndex].h1}</div>
                                        <div style={{margin: "0px 0 10px auto"}}>
                                        </div>
                                    </div>

                                    <h2 className="heading-style-h2 wallet-header margin-bottom margin-large slide-from-bottom">
                                        {scrollImages[itemIndex].caption}
                                    </h2>
                                    <p className="text-color-grey wallet-text text-size-large slide-from-bottom">{scrollImages[itemIndex].text}
                                    </p>
                                    <a target="_blank"  rel="noreferrer" href={scrollImages[itemIndex].url}
                                       className="button btn-wallet is-large with-icon width-260 w-inline-block">
                                        {scrollImages[itemIndex].urlText}
                                    </a>
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
