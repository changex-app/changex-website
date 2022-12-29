import * as React from "react"

export default function Feature({ background, content }) {
    return (
        <section id="feature" className="section_feature">
            <div className={background}>
                <div className="padding-global">
                    <div className="container-large">
                        <div className="features">
                            <h2 className="heading-style-h2">{content.head}</h2>
                            {content.feature.map((item, index) => {
                                return (
                                    <div className={item.alignImage === "left" ? "container-feature rowReverse" : "container-feature"}>
                                        <div data-current="Tabs"  data-easing="ease-out" data-duration-in="300"
                                             data-duration-out="100" className="tabs tabs-wealth  w-tabs">
                                            <div className="max-width-small-slider">
                                                <div className="money">
                                                    <h2 className="heading-style-h2 margin-bottom margin-small">{item.h1}
                                                    </h2>
                                                    <p className="text-size-large text-color-grey">
                                                        {item.h3}
                                                    </p>
                                                    <p className="text-size-large text-color-grey">
                                                        {item.h4}
                                                    </p>
                                                </div>
                                                <div className="tabs-menu w-tab-menu w-inline-block button-group centered-items">
                                                    <a href={item.buttonUrl}
                                                       className={ `button w-button button-lime`}>{item.buttonTxt}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={item.alignImage === "left" ? "wrapper-left-image" : "wallet_wrapper-right"} >
                                            <img className="centerImage" src={item.imageUrl}/>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
