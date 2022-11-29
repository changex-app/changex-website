import * as React from "react";
import { menuTabs, stake, sliderDataLandingPage, responsiveSliderData} from "./wealthItems";
import SliderSection from "../SliderSection/SliderSection";

const textData = {
    head: '',
    h1: "Money That",
    h2: "Nevet Sleeps",
    h3: "Earn passive income in the easiest possible way with DeFi’s most powerful investment tools.",
    buttonTxt: ""
}

export default function Wealth() {
    return (
        <section id="wealth-section" className="section_invest">
            <SliderSection textData={ textData } sliderData={ sliderDataLandingPage } responsiveSliderData={ responsiveSliderData } menuTabs={ menuTabs }/>
        </section>
    )
}
