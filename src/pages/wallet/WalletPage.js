import * as React from "react";
import InnerHero from "../../components/InnerHero/InnerHero";
import Advantages from "../../components/Advantages/Advantages";
import { heroObj ,advantages } from "../../components/Wallet/walletItems";
import SliderSection from "../../components/SliderSection/SliderSection";
import {responsiveWalletPageSlider, sliderDataWalletPage, textData} from "../../components/Wallet/walletItems";

export default function WalletPage(){
    return (
        <>
            <InnerHero heroObj={heroObj}/>
            <section id="wallet">
                <Advantages classGrid={'card-grid-wallet'} title={'The DeFI Wallet that brings change'} advantages={ advantages }/>
                <SliderSection textData={ textData } sliderData={ sliderDataWalletPage } responsiveSliderData={ responsiveWalletPageSlider } menuTabs={ null }/>
            </section>
        </>
    )
}
