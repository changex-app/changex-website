import * as React from "react";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";

export default function BuySellCrypto(){
    return (
        <Layout>
            <main className="pages">
                <Hero title={'Buy and Sell Crypto'}/>
                <section id="buySellCrypto"></section>
            </main>
        </Layout>
    )
}
