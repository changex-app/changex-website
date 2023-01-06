import * as React from "react";
import {useState} from "react";

export default function PerksSlide( { perksObj } ) {
    const [perksIndex, setPerksIndex] = useState(0)

    return (
        <section id="perks-slide">
            <div className="padding-global-top">
                <div className="container-large">
                    <div className="w-layout-grid">
                        <h4 className="heading-style-h4">{perksObj.perksTitle}</h4>
                    </div>
                    <div className="perksBtns">
                        {perksObj.perksBtns.map((item, index) => {
                            return (
                                <div className={`${perksIndex === index ? 'goToLink' : ''} `}>
                                    <span className="tab-nav w-inline-block w--current">
                                        {item.text}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                    <div className={`${perksIndex === 0 ? '' : 'hide'} w-layout-grid grid-3 margin-top-small`}>
                        {perksObj.perksArray.map((item,index) => {
                            return(
                                <div id={index.toString()} className="box-container-bank">
                                    <div className="padding-medium">
                                        <div className="icon-wrapper icon-card margin-bottom margin-large">
                                            <img src={item.src} loading="lazy" alt={item.title} className="icon" />
                                        </div>
                                        <h4 className="heading-style-h5 card-title-perks margin-top margin-large">
                                            <strong>{item.title}</strong>
                                        </h4>
                                        <p className="text-color-darkgrey card-text">{item.text}</p>
                                    </div>
                                </div>
                            )})
                        }
                    </div>

                    <div className={`${perksIndex === 1 ? '' : 'hide'} w-layout-grid grid-3 margin-top-small`}>
                        {perksObj.perksArray2.map((item,index) => {
                            return(
                                <div id={index.toString()} className="box-container-bank">
                                    <div className="padding-medium">
                                        <div className="icon-wrapper icon-card margin-bottom margin-large">
                                            <img src={item.src} loading="lazy" alt={item.title} className="icon" />
                                        </div>
                                        <h4 className="heading-style-h5 card-title-perks margin-top margin-large">
                                            <strong>{item.title}</strong>
                                        </h4>
                                        <p className="text-color-darkgrey card-text">{item.text}</p>
                                    </div>
                                </div>
                            )})
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}
