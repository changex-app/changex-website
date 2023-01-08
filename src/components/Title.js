import DownloadApple from "../../static/images/DW-Apple.svg";
import DownloadGoogle from "../../static/images/DW-Google.svg";
import * as React from "react";

export function TitleHero({ contentObj }) {
    return (
        <div className="hero_content-wrapper padding-vertical padding-large">
            <div className="title_wrapper max-width-large" >
                <div className="center-content z-index-1">
                    <div className="text-cut-off">
                        <div>
                            <div
                                className="heading-style-h4 text-align-center text-color-primary text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">
                                {contentObj.titleObj.h1}
                            </div>
                        </div>
                    </div>
                    <div className="margin-vertical">
                        <div
                            className="text-cut-off">
                            <h1 className="heading-style-h1 text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">
                                {contentObj.titleObj.h2} <br/> <p className="text-color-primary heading-style-h1" >{contentObj.titleObj.h3}</p>
                            </h1>

                        </div>
                    </div>
                    <div className={`${contentObj.appBtnsVisible ? '' : 'hide'} animate__animated animate__zoomIn animate__delay-1s button-group-hero  margin-top margin-large spread max-width-full-mobile-landscape`}>
                        <a target="_blank"  rel="noreferrer" href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"
                           className="button is-store max-width-full-mobile-landscape w-inline-block">
                            <img src={DownloadApple} alt="Apple" loading="lazy" width="150"></img>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=io.changex.app"
                           className="button is-store max-width-full-mobile-landscape w-inline-block">
                            <img src={DownloadGoogle} alt="Google" loading="lazy" width="150"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

