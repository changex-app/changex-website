import * as React from "react";

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
                                    <>
                                        <div
                                            className="container-feature grid-2"
                                        >
                                            <div
                                                data-current="Tabs"
                                                 className="tabs tabs-wealth-feature w-tabs"
                                            >
                                                <div className="max-width-small-slider">
                                                    <div
                                                        className={`${
                                                            item.commingSoon ? "" : "hide"
                                                        } bank-image-comming-soon`}
                                                    >
                                                        {item.offerText}
                                                    </div>
                                                    <div className="money">
                                                        <h2 className="heading-style-h2 margin-bottom margin-small">
                                                            {item.h1}&nbsp;
                                                            <span
                                                                className={`${
                                                                    item.commingSoon ? "is-blue" : "is-lime"
                                                                }  heading-style-h2`}
                                                            >
                                                                {item.h2}
                                                            </span>
                                                        </h2>
                                                        <p
                                                            className={`${
                                                                item.commingSoon ? "" : "text-color-grey"
                                                            } text-size-large `}
                                                        >
                                                            {item.h3}
                                                        </p>
                                                        <p className="text-size-large text-color-grey">
                                                            {item.h4}
                                                        </p>
                                                    </div>
                                                    <div className="tabs-menu w-tab-menu w-inline-block button-group centered-items">
                                                        <a
                                                            href={item.buttonUrl}
                                                            className={`button w-button ${item.buttonClass}`}
                                                        >
                                                            {item.buttonTxt}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    item.alignImage === "left"
                                                        ? "wrapper-left-image rowReverse"
                                                        : "wallet_wrapper-right"
                                                }
                                            >
                                                <img alt={item.h2} className={item.imageClass} src={item.imageUrl} />
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
