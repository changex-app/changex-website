import * as React from "react";
import '../../../node_modules/animate.css/animate.css';
import 'react-slideshow-image/dist/styles.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { responsiveSliderData, scrollImages, slideImages } from "./walletItems";
import { useState } from "react";
import WalletSlider from "../Slider/walletSlider";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";

let  carouselRef2;

export default function Wallet() {

    let [itemIndex, SetItemIndex] = useState(0);


    async function onClickNav(idx, carouselRef) {
        carouselRef2 = carouselRef;
        SetItemIndex(idx)
    }

    function RightBtnClick() {
        carouselRef2.current.next()
    }

    function LeftBtnClick() {
        carouselRef2.current.previous()
    }

    return (
        <section id="wallet-section" className="section_wallet">
            <div className="background-color-black">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="main-container-wallet">
                                <div className="max-width-full waller-slider  margin-slider w-tab-content">
                                    <WalletSlider onClickNav={onClickNav} responsiveSliderData={responsiveSliderData} sliderData={slideImages}/>
                                </div>
                                <div data-current="Tabs"  data-easing="ease-out" data-duration-in="300"
                                     data-duration-out="100" className="tabs tabs-wallet margin-top margin-huge w-tabs">
                                    <div className="max-width-small-slider">
                                        <AnimationOnScroll  animateIn="animate__fadeInUp" className="wallet_wrapper-right animate__animated animate__fadeInUp">
                                            <div className="wallet-content">
                                                <div className="label is-lime slide-from-bottom">{scrollImages[itemIndex].h1}</div>
                                                <div style={{margin: "0px 0 10px auto"}}>
                                                        <button onClick={LeftBtnClick} className="button-arrows"><BiChevronLeft/></button>
                                                        <button onClick={RightBtnClick} className="button-arrows"><BiChevronRight/></button>
                                                </div>
                                            </div>

                                            <h2 className="heading-style-h2 wallet-header margin-bottom margin-large slide-from-bottom">
                                                {scrollImages[itemIndex].caption}
                                            </h2>
                                            <p className="text-color-grey wallet-text text-size-large slide-from-bottom">{scrollImages[itemIndex].text}
                                            </p>
                                            <a target="_blank"  rel="noreferrer" href={scrollImages[itemIndex].url}
                                               className="button heading-style-h5 btn-wallet is-large with-icon width-260 w-inline-block">
                                                {scrollImages[itemIndex].urlText}
                                            </a>
                                        </AnimationOnScroll>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
