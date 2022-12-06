import * as React from "react";
import '../../../node_modules/animate.css/animate.css';
import { BsArrowDown } from "react-icons/bs";
import Advantages from "../Advantages/Advantages";
import { advantages } from "../Token/tokenPageItems";
import { useEffect, useState } from "react";
import { fetchApy, fetchPrice } from "../../api/fetch";
import DropDownButton from "../DropownButton";
export default function InnerHero( { heroObj } ){

    const [apy, setApy] = useState('$CHANGE');
    const [price, setPrice] = useState('$CHANGE');

    const dropDownObj = [
        {
            link: 'https://app.uniswap.org/#/swap?inputCurrency=&outputCurrency=0x7051faed0775f664a0286af4f75ef5ed74e02754',
            image: '/images/social/uniswapImg.png',
            title: 'Uniswap'
        },
        {
            link: 'https://otc.mexc.com/en-US/fastTransaction',
            image: '/images/social/mexcImage.png',
            title: 'Mexc'
        },
        {
            link: 'https://hydradex.org/#/swap',
            image: '/images/social/hydraImg.png',
            title: 'Hydra Dex'
        }
    ]

    useEffect( () => {
        if (heroObj.class === "tokenPage") {
            fetchApy()
                .then(res => {
                    if (res && res.apy) {
                        setApy(res.apy.inPercent);
                    }
                })

            fetchPrice()
                .then(res => {
                    if (res && res.price) {
                        setPrice(res.price.current_price.toFixed(4));
                    }
                })


            setTimeout(fetchPrice,fetchApy, 30000);
        }
    },[])

    return (
        <section id="inner-hero" className={`${heroObj.class}`}>
            <div className={`padding-global`}>
                <div className="container-large">
                    <div className="hero_content-wrapper padding-vertical padding-large">
                        <div className="title_wrapper_hero max-width-large" >
                            <div className="center-content z-index-1">
                                <div className="">
                                    <div className="heading-style-h4 text-align-center text-color-primary text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">
                                        {heroObj.titleObj.h1}
                                    </div>
                                </div>
                                <div className="margin-vertical margin-small ">
                                    <div className="">
                                        <h1 className="heading-style-h1 text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">
                                            {heroObj.titleObj.h2}
                                        </h1>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-align-center text-weight-normal animate__animated animate__fadeInUp animate__delay-1s">
                                        {heroObj.titleObj.h3}
                                    </div>
                                </div>
                                {heroObj.scrollBtnText && heroObj.class === "tokenPage" &&
                                    <div className="infoWrapper">
                                        <div className="infoInnerWrapper">
                                            <div className="padding-small">
                                                <div id="changexPrice" className="text-size-tiny changexprice">$CHANGE:&nbsp;
                                                    <a target="_blank" rel="noreferrer" className="price-highlight" href="https://www.coingecko.com/en/coins/changex">
                                                        <span>{price}<img alt="changex coingecko" className="coingecko" src="/images/external_link.svg"/></span>
                                                    </a></div>
                                            </div>
                                            <div className="padding-small">
                                                <div id="changexApy" className="text-size-tiny text-color-black changexapy">$CHANGE&nbsp;APY:<strong> {apy}%</strong></div>
                                            </div>
                                            <DropDownButton dropDownData={dropDownObj}/>
                                        </div>
                                    </div>
                                }
                                {heroObj.scrollBtnText && heroObj.class !== "tokenPage"  &&
                                    <div className="tabs-menu goToLink w-tab-menu">
                                        <span className="tab-nav w-inline-block w--current">
                                            <div>
                                                {heroObj.scrollBtnText} <BsArrowDown/>
                                            </div>
                                        </span>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {heroObj.class === "tokenPage" &&
                    <Advantages classGrid={'card-grid-token'} title={'A community-centric token'} advantages={ advantages }/>
                }
            </div>
        </section>
    );
}
