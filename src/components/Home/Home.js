import * as React from 'react'
import Hero from "../Hero/Hero";
import Wallet from "../Wallet/Wallet";
import Bank from "../Bank/Bank";
import Card from "../Card/Card";
import Waitlist from "../Waitlist/Waitlist";
import Wealth from "../Wealth/Wealth";
import Partners from "../Partners/Partners";
import Faq from "../Faq/Faq";
import Press from "../Press/Press";
import Cta from "../Cta/Cta";

const heroObj = {
    titleObj: {
        h1: "Money matters → Made Simple",
        h2: "Mobile Banking Meets Decentralized Finance",
        h3: "Manage, invest, and grow your wealth with a Euro bank account, access to crypto, and DeFi investment tools. Spend anywhere with the Changex",
        titleWithLink: "Crypto Debit Card."
    },
    text: "",
    appBtnsVisible: true,
    scrollBtnText: "",
    backgroundImage: "../../../static/images/Hero-BGimg-mobile.png"
}

export default function Home() {
    return (
        <>
            <Hero heroObj={heroObj}/>
            <Wallet/>
            <Bank/>
            <Partners/>
            <Card/>
            <Wealth/>
            <Cta/>
            <Press/>
        </>
    )
}
