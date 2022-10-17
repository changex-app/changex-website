import * as React from "react";
import { Cookies, getCookieConsentValue } from "react-cookie-consent";
import CookieConsentModal from "../Utils/CookieConsent"
import Header from "../components/header";
import Footer from "../components/Footer";
import MetaDecorator from "../Utils/MetaDecorator";
import content from "../../static/assets/content/content.json";
import Hero from "../components/Hero/Hero";
import Bank from "../components/Bank/Bank";
import Card from "../components/Card/Card";
import Waitlist from "../components/Waitlist/Waitlist";
import Wealth from "../components/Wealth/Wealth";
import Wallet from "../components/Wallet/Wallet";
import Press from "../components/Press";
import Partners from "../components/Partners";
import Cta from "../components/Cta/Cta";
import Faq from "../components/Faq/Faq";

const imageUrl = "/assets/images/Changex-OG.jpeg"

const IndexPage = () => {
  return (
      <>
        <div className="nk-wrap">
            <MetaDecorator
                description={content.pageDescription}
                title={content.pageTitle}
                imageAlt={content.metaImageAlt}
                imageUrl={imageUrl}
            />
          <Header />
        </div>
          <CookieConsentModal/>
          <main className="nk-pages">
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
              <Footer/>
          </main>
        <div className="preloader">
          <span className="spinner spinner-round"></span>
        </div>
      </>
  );
};

export default IndexPage;
