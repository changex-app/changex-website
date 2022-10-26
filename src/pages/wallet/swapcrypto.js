import * as React from "react";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";

export default function SwapCrypto(){
    return (
        <Layout>
            <main className="pages">
                <Hero title={'Swap Crypto'}/>
                <section id="swapcrypto"></section>
            </main>
        </Layout>
    )
}
