import * as React from "react";
import InnerHero from "../../components/InnerHero/InnerHero";
import Advantages from "../../components/Advantages/Advantages";
import { heroObj ,advantages } from "../../components/Wallet/walletItems";

export default function WalletPage(){
    return (
        <>
            <section id="wallet">
                <InnerHero heroObj={heroObj}/>
                <Advantages classGrid={'card-grid-token'} title={'A community-centric token'} advantages={ advantages }/>
            </section>
        </>
    )
}
