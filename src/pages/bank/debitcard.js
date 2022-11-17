import * as React from "react";
import Hero from "../../components/Hero/Hero";

const heroObj = {
    titleObj: "",
    text: "",
    appBtnsVisible: false,
    backgroundImage: ''
}

export default function DebitCard(){
    return (
        <>
            <Hero title={'Debit Card'}/>
            <section id="debitCard"></section>
        </>
    )
}
