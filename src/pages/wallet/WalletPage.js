import * as React from "react";
import InnerHero from "../../components/InnerHero/InnerHero";
import Advantages from "../../components/Advantages/Advantages";
import { heroObj, advantages } from "../../components/Wallet/walletItems";
import SliderSection from "../../components/SliderSection/SliderSection";
import {
    responsiveWalletPageSlider,
    sliderDataWalletPage,
    textData,
} from "../../components/Wallet/walletItems";
import Card from "../../components/Card/Card";
import SwapCrypto from "../../components/SwapCrypto/SwapCrypto";
import Faq from "../../components/Faq/Faq";
import {faqBankContent} from "../../components/Faq/faqItems";

const cardContent = {
    head1: "Meet The",
    head2: "ChangeX",
    head3: "Debit Card",
    paragraph: "",
    page: "Wallet",
};

export default function WalletPage() {
    return (
        <>
            <InnerHero heroObj={heroObj} />
            <section id="wallet">
                <Advantages
                    classGrid={"card-grid-wallet"}
                    title={"The DeFi Wallet That Changes Everything"}
                    advantages={advantages}
                />
                <SwapCrypto />
                <SliderSection
                    textData={textData}
                    sliderData={sliderDataWalletPage}
                    responsiveSliderData={responsiveWalletPageSlider}
                    menuTabs={null}
                />
                <Card cardContent={cardContent} />
                <Faq
                    background={"background-color-black"}
                    title={"Wallet FAQ"}
                    faqContent={faqBankContent}
                />
            </section>
        </>
    );
}
