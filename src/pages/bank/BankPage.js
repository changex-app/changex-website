import * as React from "react";
import Hero from "../../components/Hero/Hero";
import SliderSection from "../../components/SliderSection/SliderSection";
import { responsiveSliderData, sliderData, heroObj, stakeText } from "./bankPageItems";



export default function BankPage(){
    return (
        <>
            <Hero heroObj={ heroObj }/>
            <section id="bank" className="section_bank">
                <SliderSection textData={ stakeText } sliderData={sliderData} responsiveSliderData={ responsiveSliderData } menuTabs={{}}/>
            </section>
        </>
    )
}
