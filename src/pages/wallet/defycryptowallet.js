import * as React from "react";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";

export default function DefyCryptoWallet(){
    return (
        <Layout>
            <main className="pages">
                <Hero title={'Defy Crypto Wallet'}/>
                <section id="defyCryptoWallet"></section>
            </main>
        </Layout>
    )
}
