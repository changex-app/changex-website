import * as React from "react";
import {useRef, useState} from "react";
import {doubleApy, menuTabs, stake, stablecoins, sliderData, responsiveSliderData} from "./wealthItems";
import CardSlider from "../Slider/cardSlider";

let carouselRef2;

export default function Wealth() {

    const [active, setActive] = useState('stake');

    async function onClickNav(index, carouselRef) {
        carouselRef2 = carouselRef;

        if(index === 3 || index === 6){
            index = 0;
        }
        if(index === 4 || index === 7){
            index = 1;
        }
        if(index === 5 || index === 8){
            index = 2;
        }

        setActive(menuTabs[index].id);
    }
    function handleClick(id,index) {
        carouselRef2.current.goToSlide(index)
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
                                            Earn passive income in the easiest possible way with DeFi’s most powerful investment tools.
                                        </p>
                                    </div>
                                    <div className="tabs-menu w-tab-menu">
                                        {menuTabs.map((item, index)=> {
                                            return (
                                                <span id={item.id}
                                                      onClick={() => handleClick(item.id, index)}
                                                      className={active === item.id ? 'tab-link w-inline-block w-tab-link w--current' : 'tab-link w-inline-block w-tab-link'}>
                                                 <div>{item.title}</div>
                                             </span>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                            <div className="max-width-full wealth-card-slider margin-slider w-tab-content">
                                <CardSlider  onClickNav={onClickNav} responsiveSliderData={ responsiveSliderData } sliderData={sliderData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
