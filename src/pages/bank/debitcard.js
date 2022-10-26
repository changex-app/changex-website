import * as React from "react";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";

export default function DebitCard(){
    return (
        <Layout>
            <main className="pages">
                <Hero title={'Debit Card'}/>
                <section id="debitCard"></section>
            </main>
        </Layout>
    )
}
