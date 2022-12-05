import * as React from "react";
import MetaDecorator from "../../Utils/MetaDecorator";
import SliderSection from "../../components/SliderSection/SliderSection";
import { responsiveSliderData, sliderDataWealthPage } from "../../components/Wealth/wealthItems";
import InnerHero from "../../components/InnerHero/InnerHero";
import Faq from "../../components/Faq/Faq";
import { faqWealthContent } from "../../components/Faq/faqItems";
const imageUrl = "/assets/images/Changex-OG.jpeg";

const heroObj = {
    titleObj: {
        h1: "Grow with Changex",
        h2: "Put Your Money to Work and Grow Your Wealth",
        h3: "Access a suite of DeFi investment and passive income products and take control of your financial future."
    },
    text: "",
    appBtnsVisible: false,
    scrollBtnText: "Discover Wealth",
    backgroundImage: '',
    class: 'wealthPage'
}

const textData = {
    background: 'background-color-black',
    head: '',
    h1: "Discover",
    h2: "Staking",
    h3: "Don't just hold your crypto - stake it and earn on your investments passively, while retaining access to your coins",
    h4: "",
    buttonTxt: "Stake CHANGE"

}


export default function WealthPage(){
    return (
        <>
            <MetaDecorator
                description={heroObj.titleObj.h3}
                title={heroObj.titleObj.h2}
                imageAlt= "Changex Wealth"
                imageUrl={imageUrl}
            />
            <InnerHero heroObj={ heroObj }/>
            <section id="wealth" className="section_invest">
                <SliderSection textData={ textData } sliderData={ sliderDataWealthPage } responsiveSliderData={ responsiveSliderData } menuTabs={ null }/>
                <Faq background={'background-color-off-white'} title={'Wealth FAQ'} faqContent={faqWealthContent}/>
            </section>
        </>
    )
}
