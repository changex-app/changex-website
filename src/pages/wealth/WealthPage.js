import * as React from "react";
import Hero from "../../components/Hero/Hero";
import MetaDecorator from "../../Utils/MetaDecorator";
import SliderSection from "../../components/SliderSection/SliderSection";
import {menuTabs, responsiveSliderData, sliderData} from "../../components/Wealth/wealthItems";

const heroObj = {
    titleObj: {
        h1: "Put Your Money to Work and",
        h2: "Grow With Wealth",
        h3: "Access a suite of DeFi investment and passive income products and take control of your financial future."
    },
    text: "",
    appBtnsVisible: false,
    scrollBtnText: "Discover Wealth",
    backgroundImage: ''
}

const textData = {
    head: '',
    h1: "Discover",
    h2: "Staking",
    h3: "Don't just hold your crypto - stake it and earn on your investments passively, while retaining access to your coins",
    buttonTxt: "Stake CHANGE"

}


export default function WealthPage(){
    return (
        <>
            <MetaDecorator/>
            <Hero heroObj={ heroObj }/>
            <section id="wealth" className="section_invest">
                <SliderSection textData={ textData } sliderData={ sliderData } responsiveSliderData={ responsiveSliderData } menuTabs={ menuTabs }/>
            </section>
        </>
    )
}
