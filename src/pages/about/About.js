import * as React from "react";
import Card from "../../components/Card/Card"
import SliderSection from "../../components/SliderSection/SliderSection";
import Cta from "../../components/Cta/Cta";
import {
    heroObj
} from "../../components/aboutItems";
import backgroundImage from "../../../static/images/about/thought-catalog.png"
import MetaDecorator from "../../Utils/MetaDecorator";
import InnerHero from "../../components/InnerHero/InnerHero";
import ThoughtWall from "../../components/ThoughtWall";

const imageUrl = "/images/Changex-OG.jpeg";

const thoughtObj = {
    page: 'about',
    title: '',
    link: 'Change starts now.',
    p1:  'We leave out the tech and the complications, placing a formidable suite of financial tools safely in your pocket. All this in pursuit of better finance, and thus - better life.',
    p2:  'Go and make the most of it - we’ll be with you every step of the way.'
}

export default function About(){
    return (
        <>
            <MetaDecorator
                description={heroObj.titleObj.h3}
                title={heroObj.titleObj.h2}
                imageAlt="Changex Bank"
                imageUrl={imageUrl}
            />
            <InnerHero heroObj={ heroObj }/>
            <section id="about">
                <ThoughtWall thoughtObj={ thoughtObj }/>
                <Cta/>
            </section>
        </>
    )
}
