import * as React from "react";
import MetaDecorator from "../../Utils/MetaDecorator";
import InnerHero from "../../components/InnerHero/InnerHero";
import Faq from "../../components/Faq/Faq";
import {heroObj, tokenPageTokenomicsData} from "../../components/Token/tokenPageItems";
import { faqBankContent } from "../../components/Faq/faqItems";
import Tokenomics from "../../components/Token/Tokenomics";
const imageUrl = "/assets/images/Changex-OG.jpeg";
export default function TokenPage() {
    return (
        <>
            <MetaDecorator
                description={heroObj.titleObj.h3}
                title={heroObj.titleObj.h2}
                imageAlt="Changex Bank"
                imageUrl={imageUrl}
            />
            <InnerHero heroObj={heroObj} />
            <Tokenomics background={'background-color-black'} tokenData={tokenPageTokenomicsData} />
            <section id="token-page">
                <Faq
                    background={"background-color-off-white"}
                    title={"FAQ"}
                    faqContent={faqBankContent}
                />
            </section>
        </>
    );
}
