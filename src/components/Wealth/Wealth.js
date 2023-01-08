import * as React from "react";
import {
    menuTabs,
    sliderDataLandingPage,
    responsiveSliderData,
} from "./wealthItems";
import SliderSection from "../SliderSection/SliderSection";

const textData = {
    background: "background-color-black",
    head: "",
    h1: "Money That",
    h2: "Nevet Sleeps",
    h3: "Earn passive income in the easiest possible way with DeFi’s most powerful investment tools.",
    buttonTxt: "",
};

export default function Wealth() {
    return (
        <section id="wealth-section" className="section_invest">
            <SliderSection
                textData={textData}
                sliderData={sliderDataLandingPage}
                responsiveSliderData={responsiveSliderData}
                menuTabs={menuTabs}
            />
        </section>
    );
}
