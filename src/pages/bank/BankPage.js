import * as React from "react";
import Card from "../../components/Card/Card"
import SliderSection from "../../components/SliderSection/SliderSection";
import Cta from "../../components/Cta/Cta";
import {
    responsiveSliderData,
    sliderData,
    heroObj,
    textData
} from "./bankPageItems";
import MetaDecorator from "../../Utils/MetaDecorator";
import InnerHero from "../../components/InnerHero/InnerHero";
const imageUrl = "/assets/images/Changex-OG.jpeg";


export default function BankPage(){
    return (
        <>
            <MetaDecorator
                description={heroObj.titleObj.h3}
                title={heroObj.titleObj.h2}
                imageAlt="Changex Bank"
                imageUrl={imageUrl}
            />
            <InnerHero heroObj={ heroObj }/>
            <section id="bank" className="section_bank">
                <SliderSection textData={ textData } sliderData={sliderData} responsiveSliderData={ responsiveSliderData } menuTabs={null}/>
                <Card/>
                <Cta/>
            </section>
        </>
    )
}
