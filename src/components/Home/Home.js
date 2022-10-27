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


export default function Home() {
    return (
        <>
            <Hero title='Mobile Banking Meets Decantralized Finance'/>
            <Wallet/>
            <Bank/>
            <Card/>
            <Waitlist/>
            <Wealth/>
            <Partners/>
            <Faq/>
            <Press/>
            <Cta/>
        </>
    )
}
