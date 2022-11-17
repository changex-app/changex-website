import * as React from "react";
import Hero from "../../components/Hero/Hero";
import MetaDecorator from "../../Utils/MetaDecorator";

const heroObj = {
    titleObj: {
        h1: "Put Your Money to Work. Grow Your Wealth",
        h2: "Grow With Changex",
        h3: "Access a suite of DeFi investment and passive income products and take control of your financial future."
    },
    text: "",
    appBtnsVisible: false,
    scrollBtnText: "Discover Wealth",
    backgroundImage: ''
}


export default function WealthPage(){
    return (
        <>
            <MetaDecorator/>
            <Hero heroObj={ heroObj }/>
            <section id="savings"/>
        </>
    )
}
