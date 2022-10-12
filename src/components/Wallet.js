import * as React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const scrollImages = [
    {
        src: '/images/icn-40x40-wallet.svg',
        caption: 'A wallet just for you',
        text: 'Own your crypto - Changex has no control over your wallet and can never access your funds. All information is kept safely on the blockchain',
        url: '"https://changex.io',
        urlText: 'Download the app'
    },
    {
        src: 'images/wallet/scroll_3.svg',
        caption: 'Access multi-chain crypto',
        text: 'Get on top of some of the hottest cryptocurrencies with a focus on Proof-of-Stake tokens. Swap between networks with ease.',
        url: 'https://firebasestorage.googleapis.com/v0/b/changex-io.appspot.com/o/changex-whitepaper-v4.pdf?alt=media&amp;token=85d7033d-ce62-4fd2-aefd-b50f2a758530',
        urlText: 'Read the whitepaper'
    },
    {
        src: 'images/wallet/scroll_4.svg',
        caption: 'Buy and sell crypto',
        text: 'Trade cryptocurrencies with the click of a button with vetted protocols and contracts.',
        url: 'Download the app',
        urlText: "https://changex.io"
    },
];

const slideImages = [
    {
        src: '/images/wallet/Sliderimg---stake.png',
    },
    {
        src: '/images/wallet/Sliderimg---buy.png',
    },
    {
        src: '/images/wallet/Sliderimg---sell.png',
    },
    {
        src: 'images/wallet/Sliderimg---swap.png',
    }
];

const properties = {
    duration: 5000,
    autoplay: true,
    defaultIndex: 0,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "linear",
};


export default function Wallet() {
    return (
        <section id="wallet" className="section_wallet">
            <div className="background-color-black">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="padding-section-large">
                            <div className="div-block">
                                <div className="wallet_wrapper-left animate__animated animate__fadeInUp">
                                    <div className="label is-lime slide-from-bottom">Wallet</div>
                                    <h2 className="heading-style-h2 margin-bottom margin-large slide-from-bottom">Decentralized
                                        Crypto <span className="highlight is-green">Wallet</span></h2>
                                    <p className="text-color-grey text-size-large slide-from-bottom">Access crypto from
                                        any point on Earth and stay in control with Changex’s
                                        highly-secure, <span>non-custodial</span><span
                                            className="info-icn hide">ⓘ</span> crypto wallet. No KYC required.</p>
                                </div>
                                <div className="wallet_wrapper-right">
                                    <div data-delay="4000" data-animation="fade" className="slider"
                                         data-autoplay="true" data-easing="ease-out" data-hide-arrows="false"
                                         data-disable-swipe="true" data-autoplay-limit="0" data-nav-spacing="0"
                                         data-duration="500" data-infinite="true">
                                        <div className="slide-container">
                                            <Fade {...properties}>
                                                {slideImages.map((slide, index)=> {
                                                    return (
                                                        <div className="slide01 w-slide">
                                                            <img src={slide.src}
                                                                 loading="lazy" width="auto"
                                                                 className="image">

                                                            </img>
                                                        </div>
                                                    )
                                                })}
                                            </Fade>
                                        </div>
                                    </div>
                                    <div className="wallet_benefits-container"></div>

                                    {scrollImages.map((item, index)=> {
                                        return(
                                            <div id={index.toString()} className="wallet_benefits-container with-border">
                                                <div className="wallet_benefit-wrapper margin-vertical margin-large">
                                                    <div
                                                        className="icon-wrapper-100 is-green margin-bottom margin-xhuge slide-from-bottom">
                                                        <img src={item.src} loading="lazy"></img></div>
                                                    <div className="margin-bottom margin-huge">
                                                        <h3 className="heading-style-h4 margin-vertical margin-medium slide-from-bottom">{item.caption}</h3>
                                                        <p className="text-color-grey text-size-medium slide-from-bottom">{item.text}</p>
                                                    </div>
                                                    <a href={item.url} target="_blank"
                                                       className="button is-link w-inline-block">
                                                        <div
                                                            className="text-style-link text-size-medium is-green slide-from-bottom">{item.urlText}
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
