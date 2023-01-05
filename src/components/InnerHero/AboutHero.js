import * as React from 'react'
import {aboutQuoteObject, perksArray} from "../aboutItems";
import Perks from "../Perks";
import Quote from "../Quote";

export default function AboutHero( { heroObj } ){
    return (
        <section id="inner-hero">
            <div className="padding-global relative">
                <div className="container-large ">
                    <div id="inner-hero-title" className="hero_about_content-wrapper padding-vertical padding-small ">
                        <div className="title_wrapper_hero_about max-width-large animate__animated animate__fadeInUp animate__delay-1s" >
                            <div className="center-content z-index-1">
                                <div className="">
                                    <h6 className="heading-style-h6  text-color-primary text-left-mobile">
                                        {heroObj.titleObj.h1}
                                    </h6>
                                </div>
                                <div className="margin-vertical margin-small ">
                                    <div className="">
                                        <h1 className="heading-style-h1 text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">
                                            {heroObj.titleObj.h2}
                                        </h1>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-weight-normal animate__animated animate__fadeInUp animate__delay-1s">
                                        {heroObj.titleObj.h3}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Quote quoteObject={aboutQuoteObject}/>
                    <div className="margin-top-small">
                        <div className="text-weight-normal animate__animated animate__fadeInUp animate__delay-1s">
                            {heroObj.titleObj.h4}
                        </div>
                    </div>
                    <div className="w-layout-grid grid-2 margin-top-medium">
                        <Perks perksArray={perksArray}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
