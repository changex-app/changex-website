import * as React from "react";
import CookieConsentModal from "../Utils/CookieConsent"
import Header from "../components/header";
import Footer from "../components/Footer";
import MetaDecorator from "../Utils/MetaDecorator";
import Hero from "../components/Hero/Hero";
import Bank from "../components/Bank/Bank";
import Card from "../components/Card/Card";
import Waitlist from "../components/Waitlist/Waitlist";
import Wealth from "../components/Wealth/Wealth";
import Wallet from "../components/Wallet/Wallet";
import Press from "../components/Press/Press";
import Partners from "../components/Partners/Partners";
import Cta from "../components/Cta/Cta";
import Faq from "../components/Faq/Faq";
import content from "../../static/assets/content/content.json";
import Layout from "../components/Layout/Layout";
const imageUrl = "/assets/images/Changex-OG.jpeg"

const IndexPage = () => {
  return (

      <>
      <Layout>
        <div className="wrap">
            <MetaDecorator
                description={content.pageDescription}
                title={content.pageTitle}
                imageAlt={content.metaImageAlt}
                imageUrl={imageUrl}
            />
        </div>
          <CookieConsentModal/>
          <main className="pages">
              <Hero/>
              <Wallet/>
              <Bank/>
              <Card/>
              <Waitlist/>
              <Wealth/>
              <Partners/>
              <Faq/>
              <Press/>
              <Cta/>
        </main>
      </Layout>
         </>
  );
};

export default IndexPage;
