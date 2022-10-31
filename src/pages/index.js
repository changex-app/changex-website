import * as React from "react";
import CookieConsentModal from "../Utils/CookieConsent";
import MetaDecorator from "../Utils/MetaDecorator";
import Home from "../components/Home/Home";
import Navigation from "../components/Navbar/Nav";
import Footer from "../components/Footer";
import content from "../../static/assets/content/content.json";
const imageUrl = "/assets/images/Changex-OG.jpeg";

const IndexPage = () => {

    return (
        <>
          <MetaDecorator
              description={content.pageDescription}
              title={content.pageTitle}
              imageAlt={content.metaImageAlt}
              imageUrl={imageUrl}
          />
          <CookieConsentModal/>
          <Navigation/>
          <main className="pages">
              <Home/>
          </main>
          <Footer/>
        </>
  );
};

export default IndexPage;
