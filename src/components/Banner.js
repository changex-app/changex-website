import * as React from 'react';
import {Link} from "react-router-dom";
import {logosParners} from "./Partners/partnersItems";

export default function Banner({title, backgroundClass,logos}) {
    return (
        <>
            <div className={backgroundClass}>
                <div className="contentWrapper">
                    <h3 className="heading-style-h3 white">
                        {title.head} <span className="heading-style-h3 is-lime">{title.head2}</span>
                    </h3>

                    <h3 className="heading-style-h3 white">
                        {title.head3}
                    </h3>
                    <div className="spacer-middle"></div>
                    <div className="bannerLogos">
                        {logos.map((logo, index) => {
                            return (
                                <a href={logo.href} className="logo-link w-inline-block">
                                    <img
                                        src={logo.src}
                                        loading="lazy"
                                        width="75"
                                        alt={logo.name}
                                        className="logo logo-max-width-200"
                                    ></img>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )

}
