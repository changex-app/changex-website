import * as React from "react";
import Hero from "../../components/Hero/Hero";
import Layout from "../../components/Layout/Layout";
import MetaDecorator from "../../Utils/MetaDecorator";

export default function Staking(){
    return (
        <>
            <MetaDecorator/>
            <Hero title={'Staking'}/>
            <section id="staking"></section>
        </>
    )
}
