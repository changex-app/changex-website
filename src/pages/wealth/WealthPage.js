import * as React from "react";
import MetaDecorator from "../../Utils/MetaDecorator";
import SliderSection from "../../components/SliderSection/SliderSection";
import { responsiveSliderData, sliderDataWealthPage } from "../../components/Wealth/wealthItems";
import InnerHero from "../../components/InnerHero/InnerHero";
import Faq from "../../components/Faq/Faq";
import { faqWealthContent } from "../../components/Faq/faqItems";
import Feature from "../../components/Features/Features";
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
    buttonTxt: "Stake CHANGE",
    buttonUrl: "https://urlgeni.us/changexapp"
}

const featureContent = {
    head: 'More Features Coming Soon',
    feature: [
        {
            h1: "Pioneering Leveraged",
            h2: "Staking",
            h3: "A unique way to boost the staking rewards of any PoS token in the app by a factor of 1.2-2x. All while maintaining low liquidation risk. Leveraged staking works with any interest-bearing economy.",
            h4: "",
            buttonTxt: "Learn More",
            buttonUrl: "https://urlgeni.us/changexapp",
            buttonClass: "button-lime",
            imageUrl: "/images/wealth/leverage_staking.svg",
            imageClass: "centerImage",
            alignImage: 'right',
            commingSoon: false,
            offerText: '',
            bottomText: ''
        },
        {
            h1: "Discover",
            h2: "Lending",
            h3: "Earn on stablecoins like USDT and USDC while powering up the Leveraged Staking economy. ",
            h4: "Users who use leveraged staking borrow your stablecoins to acquire more of their asset, and pay you back the interest. Everything is completely decentralized, and your coins play a vital role in the ecosystem.",
            buttonTxt: "Read Whitepaper",
            buttonUrl: "https://firebasestorage.googleapis.com/v0/b/changex-io.appspot.com/o/changex-whitepaper-v4.pdf?alt=media&amp;token=85d7033d-ce62-4fd2-aefd-b50f2a758530",
            buttonClass: "button-lime",
            imageUrl: "/images/wealth/lending.svg",
            imageClass: "centerImage",
            alignImage: 'left',
            commingSoon: false,
            offerText: '',
            bottomText: ''
        }
    ]
}

const featureContent2 = {
    feature: [
        {
            h1: "Stack For A Rainy Day With",
            h2: "Savings",
            h3: "Deposit idle stablecoin assets for a fixed interest rate and remain decentralized: Changex relies on smart contracts and can never access your assets.",
            h4: "",
            buttonTxt: "Read Whitepaper",
            buttonUrl: "https://firebasestorage.googleapis.com/v0/b/changex-io.appspot.com/o/changex-whitepaper-v4.pdf?alt=media&amp;token=85d7033d-ce62-4fd2-aefd-b50f2a758530",
            buttonClass: "background-color-blue",
            imageUrl: "/images/savings/Savings_Rainy_Day.png",
            imageClass: "centerImageScaleDown",
            alignImage: 'right',
            commingSoon: true,
            offerText: 'Coming Soon',
            bottomText: ''
        }
    ]
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
                <Feature background={'background-color-blue'} content={featureContent}/>
                <Feature background={'background-color-off-pink'} content={featureContent2}/>
                <Faq background={'background-color-off-white'} title={'Wealth FAQ'} faqContent={faqWealthContent}/>
            </section>
        </>
    )
}
