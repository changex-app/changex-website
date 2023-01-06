import * as React from "react";
import { Link } from 'react-router-dom';
import MetaDecorator from "../../Utils/MetaDecorator";
const imageUrl = "/assets/images/Changex-OG.jpeg";

const titleObj = {
    titleObj: {
        h1: "",
        h2: "Tokens on Changex",
        h3: ""
    },
    text: "",
    appBtnsVisible: false,
    buttonUrl: "",
    scrollBtnText: "",
    backgroundImage: '',
    class: 'supportedTokensPage'
}

export default function Tokens(){
    return (
        <>
            <MetaDecorator
                description="Supported Changex Tokens"
                title="Supported Changex Tokens"
                imageAlt="Supported Changex Tokens"
                imageUrl={imageUrl}
            />
            <section id="supported-tokens" className="vh">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="">
                            <div className="title_wrapper_hero max-width-large" >
                                <div className="center-content z-index-1">
                                    <div className="margin-vertical margin-small ">
                                        <div className="">
                                            <h1 className="heading-style-h1 text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">
                                                {titleObj.titleObj.h2}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="background-color-blue grid-2-1">
                            <div className="padding-small quoteImage">
                                {/* <img src={} />*/}
                            </div>
                            <div className="">
                                <div className="quoteText">
                                    <div className="padding-small margin-large">
                                        <h3 className="heading-style-h3"> Want to get your project listed?</h3>
                                        <div className="spacer-middle"></div>
                                        <div >
                                            <Link to={"/partner"}
                                               className="button w-button background-color-off-blue">Become A Partner
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
