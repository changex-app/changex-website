import * as React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import MetaDecorator from "../Utils/MetaDecorator";
import content from "../../static/assets/content/content.json";
import Hero from "../components/Hero";
import Bank from "../components/Bank";
import Card from "../components/Card";

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
          <main className="nk-pages">
              <Hero/>
              <Bank/>
              <Card/>
              <Footer/>
          </main>
        </div>
        <div className="preloader">
          <span className="spinner spinner-round"></span>
        </div>
      </>
  );
};

export default IndexPage;
