import * as React from 'react'
import {Link} from "react-router-dom";

const titleObj = {
    titleObj: {
        h1: "",
        h2: "Swap Crypto",
        h3: "Get your hands on a variety of tokens on multiple blockchains, including HydraChain and Ethereum, with Binance Smart Chain and more coming soon."
    },
    text: "",
    appBtnsVisible: false,
    buttonUrl: "/swap",
    scrollBtnText: "View All",
    backgroundImage: '',
    class: 'walletPage'
}

export default function SwapCrypto() {
    return (
        <section id="hero" className="section_hero">
            <div className="padding-global">
                <div className="container-large">
                    <div className="hero_content-wrapper padding-vertical padding-large">
                        <div className="title_wrapper_hero max-width-large" >
                            <div className="center-content z-index-1">
                                <div className="margin-vertical margin-small ">
                                    <div className="">
                                        <h1 className="heading-style-h1 text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">
                                            {titleObj.titleObj.h2}
                                        </h1>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-align-center text-weight-normal animate__animated animate__fadeInUp animate__delay-1s">
                                        {titleObj.titleObj.h3}
                                    </div>
                                </div>
                                    <div className={`${titleObj.scrollBtnText && titleObj.class !== "tokenPage" ? '' : 'hide'} tabs-menu goToLink w-tab-menu`}>
                                        <span className="tab-nav w-inline-block w--current">
                                            <Link to={titleObj.buttonUrl}>
                                                                {titleObj.scrollBtnText}
                                            </Link>
                                        </span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
