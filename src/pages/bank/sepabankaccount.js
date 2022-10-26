import * as React from "react";
import Layout from "../../components/Layout/Layout";
import MetaDecorator from "../../Utils/MetaDecorator";
import content from "../../../static/assets/content/content.json";
import Hero from "../../components/Hero/Hero";

export default function SepaBankAccount(){
    return (
        <Layout>
            <main className="pages">
                <Hero title={'Sepa Bank Account'}/>
                <section id="sepaBankAccount"></section>
            </main>
        </Layout>
    )
}
