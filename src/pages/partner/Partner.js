import * as React from "react";
import MetaDecorator from "../../Utils/MetaDecorator";
import {featureContent, heroPartnerObj} from "../../components/Partners/partnersItems";
import {faqBankContent} from "../../components/Faq/faqItems";
import Faq from "../../components/Faq/Faq";
import AboutHero from "../../components/InnerHero/AboutHero";
import PerksSlide from "../../components/PerksSlide";
import Feature from "../../components/Features/Features";
const imageUrl = "/assets/images/Changex-OG.jpeg";

export default function Partner(){
    return (
        <>
            <MetaDecorator
                description={heroPartnerObj.titleObj.h3}
                title={heroPartnerObj.titleObj.h2}
                imageAlt="Changex Bank"
                imageUrl={imageUrl}
            />
            <AboutHero heroObj={heroPartnerObj}/>
            <PerksSlide perksObj={heroPartnerObj.perks} />
            <Feature background={'background-color-off-pink'} content={featureContent}/>
            <section id="partner">
                <Faq background={'background-color-off-white'} title={'FAQ'} faqContent={faqBankContent}/>
            </section>
        </>
    )
}
