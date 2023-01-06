import * as React from "react";
import MetaDecorator from "../../Utils/MetaDecorator";
import { heroPartnerObj } from "../../components/Partners/partnersItems";
import { heroObj } from "../../components/Token/tokenPageItems";
import {faqBankContent} from "../../components/Faq/faqItems";
import Faq from "../../components/Faq/Faq";
import AboutHero from "../../components/InnerHero/AboutHero";
const imageUrl = "/assets/images/Changex-OG.jpeg";

export default function Partner(){
    return (
        <>
            <MetaDecorator
                description={heroObj.titleObj.h3}
                title={heroObj.titleObj.h2}
                imageAlt="Changex Bank"
                imageUrl={imageUrl}
            />
            <AboutHero heroObj={heroPartnerObj}/>
            <section id="partner">
                <Faq background={'background-color-off-white'} title={'FAQ'} faqContent={faqBankContent}/>
            </section>
        </>
    )
}
