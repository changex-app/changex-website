import * as React from "react";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card"
import SliderSection from "../../components/SliderSection/SliderSection";
import Cta from "../../components/Cta/Cta";
import {
    responsiveSliderData,
    sliderData,
    heroObj,
    stakeText
} from "./bankPageItems";
import MetaDecorator from "../../Utils/MetaDecorator";


export default function BankPage(){
    return (
        <>
            <MetaDecorator/>
            <Hero heroObj={ heroObj }/>
            <section id="bank" className="section_bank">
                <SliderSection textData={ stakeText } sliderData={sliderData} responsiveSliderData={ responsiveSliderData } menuTabs={{}}/>
                <Card/>
                <Cta/>
            </section>
        </>
    )
}
