import * as React from "react";
import MetaDecorator from "../../Utils/MetaDecorator";
import InnerHero from "../../components/InnerHero/InnerHero";
import { heroObj } from "../../components/Token/tokenPageItems";
import Advantages from "../../components/Advantages/Advantages";
const imageUrl = "/assets/images/Changex-OG.jpeg";

const cardContent = {
    head1: 'Meet The',
    head2: 'ChangeX',
    head3: 'Debit Card',
    head4: 'Virtual or physical - it’s always there for you.',
    paragraph: 'Connected to your wallet and bank account, the Changex Crypto Debit Card lets you spend anything, anywhere. Yes, Euro and any crypto token in the app. Just choose whatever works best for you.'

}

export default function TokenPage(){
    return (
        <>
            <MetaDecorator
                description={heroObj.titleObj.h3}
                title={heroObj.titleObj.h2}
                imageAlt="Changex Bank"
                imageUrl={imageUrl}
            />
            <InnerHero heroObj={ heroObj }/>
            <section id="token-page">
            </section>
        </>
    )
}
