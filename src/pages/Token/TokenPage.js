import * as React from "react";
import Hero from "../../components/Hero/Hero";
import MetaDecorator from "../../Utils/MetaDecorator";

export default function Staking(){
    return (
        <>
            <MetaDecorator/>
            <Hero title={'Staking'}/>
            <section id="token-page"></section>
        </>
    )
}
