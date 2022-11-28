import * as React from "react"
import CardSlider from "../Slider/cardSlider";
import {useState} from "react";

let carouselRef2;

export default function SliderSection({ textData, sliderData, responsiveSliderData, menuTabs }) {

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
        <div className="background-color-black">
            <div className="padding-global">
                <div className="container-large">
                    <div className="main-container">
                        <div data-current="Tabs"  data-easing="ease-out" data-duration-in="300"
                             data-duration-out="100" className="tabs tabs-wealth margin-top margin-huge w-tabs">
                            <div className="max-width-small-slider">
                                <div className="money">
                                    <div className="label is-lime">{textData.head}</div>
                                    <h2 className="heading-style-h2 margin-bottom margin-small">{textData.h1}
                                        <span className="highlight is-green"> {textData.h2}</span>
                                    </h2>
                                    <p className="text-size-large text-color-grey">
                                        {textData.h3}
                                    </p>
                                </div>

                                {menuTabs &&
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
                                }
                            </div>
                        </div>
                        <div className="max-width-full wealth-card-slider margin-slider w-tab-content">
                            <CardSlider  onClickNav={onClickNav} responsiveSliderData={ responsiveSliderData } sliderData={sliderData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
