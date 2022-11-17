import * as React from "react";
import Hero from "../../components/Hero/Hero";

const heroObj = {
    titleObj: {
        h1: "A Crypto-Friendly Bank With a DeFi Core",
        h2: "Banking For The Dgital Age",
        h3: "Changex simplifies your entry into the digital economy with a uniquely functional debit card - key elements of banking inside a non-custodial crypto wallet"
    },
    text: "",
    appBtnsVisible: false,
    scrollBtnText: "Discover Bank",
    backgroundImage: ''
}

export default function BankPage(){
    return (
        <>
            <Hero heroObj={ heroObj }/>
            <section id="debitCard"></section>
        </>
    )
}
