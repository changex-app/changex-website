import * as React from "react";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";

export default function Lending(){
    return (
        <Layout>
            <main className="pages">
                <Hero title={'Lending'}/>
                <section id="lending">Lending</section>
            </main>
        </Layout>

    )
}
