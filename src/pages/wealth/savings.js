import * as React from "react";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";

export default function Savings(){
    return (
        <Layout>
            <main className="pages">
                <Hero title={'Savings'}/>
                <section id="savings"></section>
            </main>
        </Layout>
    )
}
