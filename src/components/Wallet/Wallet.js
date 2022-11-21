import * as React from "react";
import { Fade } from 'react-slideshow-image';
import '../../../node_modules/animate.css/animate.css';
import 'react-slideshow-image/dist/styles.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { BiChevronLeftCircle } from "react-icons/bi";
import { BiChevronRightCircle } from "react-icons/bi";
import {scrollImages, slideImages, SliderOptions} from "./walletItems";
import SimpleImageSlider from "react-simple-image-slider";
import {useState} from "react";

export default function Wallet() {

    const [itemIndex, SetItemIndex] = useState(0);

    function RightBtnClick () {
        onClickNav(true)
        let container = document.getElementsByClassName('rsis-image');
        for (let item of container) {
            item.setAttribute('style', `background-image: url("/images/wallet/cryptowallet_${itemIndex}")`);
        }
    }


    function LeftBtnClick () {
        onClickNav(false)
        let container = document.getElementsByClassName('rsis-image');
        for (let item of container) {
            item.setAttribute('style', `background-image: url("/images/wallet/cryptowallet_${itemIndex}")`);
        }
    }

    function onClickNav(toRight) {
        if (toRight){
            if(itemIndex === 3) {
                SetItemIndex(0)
            } else {
                SetItemIndex(itemIndex + 1)
            }
        } else {
            if(itemIndex === 0) {
                SetItemIndex(3)
            } else {
                SetItemIndex(itemIndex - 1)
            }
        }
    }

    function onClickBullets(idx) {
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
                                        <div className="slide-container">
                                            <div className="simpleImageSlider">
                                                <SimpleImageSlider
                                                    className = {'simpleImageSlider'}
                                                    onClickNav = { onClickNav }
                                                    onClickBullets = { onClickBullets }
                                                    images = { slideImages }
                                                    showBullets = { SliderOptions.showBullets }
                                                    showNavs = { SliderOptions.showNavs }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wallet_benefits-container"></div>

                                </div>
                                <AnimationOnScroll  animateIn="animate__fadeInUp" className="wallet_wrapper-right animate__animated animate__fadeInUp">
                                    <div style={{display: "flex"}}>
                                        <div className="label is-lime slide-from-bottom">{scrollImages[itemIndex].h1}</div>
                                        <div style={{margin: "0px 0 10px auto"}}>
                                            <button onClick={LeftBtnClick} className="button-arrows"><BiChevronLeftCircle/></button>
                                            <button onClick={RightBtnClick} className="button-arrows"><BiChevronRightCircle/></button>
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
