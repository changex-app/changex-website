import * as React from "react";
import {useState} from "react";
import {doubleApy, menuTabs, stake, stablecoins, sliderData} from "./wealthItems";
import { StaticImage } from "gatsby-plugin-image";
import CardSlider from "../Slider/cardSlider";


export default function Wealth() {

    const [active, setActive] = useState('stake');

    function handleClick(id) {
        setActive(id);
    }

    return (
        <section id="wealth" className="section_invest">
            <div className="background-color-black">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="main-container">
                            <div data-current="Tabs"  data-easing="ease-out" data-duration-in="300"
                                 data-duration-out="100" className="tabs tabs-wealth margin-top margin-huge w-tabs">
                                <div className="max-width-small-slider">
                                    <div className="money">
                                        <div className="label is-lime">Invest with changex</div>
                                        <h2 className="heading-style-h2 margin-bottom margin-small">Money that
                                            <span className="highlight is-green"> never sleeps</span>
                                        </h2>
                                        <p className="text-size-large text-color-grey">
                                            Earn passive income in easiest possible way with DeFi’s most powerful investment tools.
                                        </p>
                                    </div>
                                    <div className="tabs-menu w-tab-menu">
                                        {menuTabs.map((item, index)=> {
                                            return (
                                                <span id={item.id}
                                                      onClick={() => handleClick(item.id)}
                                                      className={active === item.id ? 'tab-link w-inline-block w-tab-link w--current' : 'tab-link w-inline-block w-tab-link'}>
                                                 <div>{item.title}</div>
                                             </span>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                            <div className="max-width-full margin-slider w-tab-content">
                                <CardSlider partialVisible={true} sliderData={sliderData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
