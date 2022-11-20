import * as React from "react";
import { Fade } from 'react-slideshow-image';
import '../../../node_modules/animate.css/animate.css';
import 'react-slideshow-image/dist/styles.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {properties, scrollImages, slideImages, SliderOptions} from "./walletItems";
import {StaticImage} from "gatsby-plugin-image";
import SimpleImageSlider from "react-simple-image-slider";
import {useState} from "react";
import {bankContent} from "../Bank/bankItem";

export default function Wallet() {

    const [itemIndex, SetItemIndex] = useState(0);


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

        console.warn('onClickNav toRight',toRight)
    }

    function onClickBullets(idx) {
        SetItemIndex(idx)
        console.warn('onClickBullets idx', idx)
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
                                            {/*<Fade {...properties}>
                                                {slideImages.map((slide, index)=> {
                                                    return (
                                                        <div className="slide01 w-slide">
                                                            <img src={slide.src}
                                                                 alt=""
                                                                 loading="lazy" width="auto"
                                                                 className="image">
                                                            </img>
                                                        </div>
                                                    )
                                                })}
                                            </Fade>*/}
                                            <div className="simpleImageSlider">
                                                <SimpleImageSlider
                                                    className={'simpleImageSlider'}
                                                    onClickNav={ onClickNav }
                                                    onClickBullets={ onClickBullets }
                                                    images={ slideImages }
                                                    showBullets={ true }
                                                    showNavs={ true }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wallet_benefits-container"></div>
                                    {/*{scrollImages.map((item, index)=> {
                                        return(
                                            <div id={index.toString()} className="wallet_benefits-container with-border">

                                                <div className="wallet_benefit-wrapper margin-vertical margin-large">
                                                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}
                                                        className="icon-wrapper-100 is-green margin-bottom margin-xhuge slide-from-bottom">
                                                        <img src={item.src} loading="lazy" alt={item.caption}></img>
                                                    </AnimationOnScroll>
                                                    <AnimationOnScroll animateIn="animate__fadeInUp"  animateOnce={true} className="margin-bottom margin-huge">
                                                        <h3 className="heading-style-h4 margin-vertical margin-medium slide-from-bottom">{item.caption}</h3>
                                                        <p className="text-color-grey text-size-medium slide-from-bottom">{item.text}</p>
                                                    </AnimationOnScroll>
                                                    <a href={item.url} rel="noreferrer" target="_blank" className="button is-link w-inline-block">
                                                        <div className="text-style-link text-size-medium is-green slide-from-bottom">{item.urlText}</div>
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    })}*/}
                                </div>
                                <AnimationOnScroll  animateIn="animate__fadeInUp" className="wallet_wrapper-right animate__animated animate__fadeInUp">
                                    <div className="label is-lime slide-from-bottom">{scrollImages[itemIndex].h1}</div>
                                    <h2 className="heading-style-h2 margin-bottom margin-large slide-from-bottom">
                                        {/*Decentralized <br/>Crypto &nbsp;
                                        <span className="highlight is-green">Wallet</span>*/}
                                        {scrollImages[itemIndex].caption}
                                    </h2>
                                    <p className="text-color-grey text-size-large slide-from-bottom">{scrollImages[itemIndex].text}
                                       {/* <span>non-custodial</span>
                                        <span className="info-icn hide">ⓘ</span>
                                        crypto wallet. <br/>No KYC required.*/}
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
            {/*<div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large is-cta-section">
                        <div className="max-width-medium">
                            <div  animateIn="animate__fadeInUp" animateOnce={true} className="wallet_wrapper-left animate__animated animate__fadeInUp">
                                <div className="label is-lime slide-from-bottom">Wallet</div>
                                <h2 className="heading-style-h2 margin-bottom margin-large slide-from-bottom">
                                    Decentralized <br/>Crypto &nbsp;
                                    <span className="highlight is-green">Wallet</span>
                                </h2>
                                <p className="text-color-grey text-size-large slide-from-bottom">Access crypto from
                                    any point on Earth and stay in control with Changex’s
                                    highly-secure,
                                    <span>non-custodial</span>
                                    <span className="info-icn hide">ⓘ</span>
                                    crypto wallet. <br/>No KYC required.
                                </p>
                            </div>
                    </div>
                        <div className="cta-image">
                            <StaticImage src={'../../../static/images/cta/image_cta.png'} alt={'cta'}></StaticImage>
                        </div>
                </div>
            </div>
            </div>*/}
        </section>
    )
}
