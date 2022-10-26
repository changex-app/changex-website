import * as React from "react";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";

export default function Staking(){
    return (
        <Layout>
            <main className="pages">
                <Hero title={'Staking'}/>
                <section id="staking"></section>
            </main>
        </Layout>
    )
}
