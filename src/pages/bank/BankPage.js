import * as React from "react";
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
import InnerHero from "../../components/InnerHero/InnerHero";


export default function BankPage(){
    return (
        <>
            <MetaDecorator/>
            <InnerHero heroObj={ heroObj }/>
            <section id="bank" className="section_bank">
                <SliderSection textData={ stakeText } sliderData={sliderData} responsiveSliderData={ responsiveSliderData } menuTabs={null}/>
                <Card/>
                <Cta/>
            </section>
        </>
    )
}
