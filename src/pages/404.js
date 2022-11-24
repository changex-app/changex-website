import * as React from "react";
/*import { StaticImage } from "gatsby-plugin-image";*/
import MetaDecorator from "../Utils/MetaDecorator";

const NotFoundPage = () => {
  return (
      <>
      <MetaDecorator/>
      <main className="pages">
      <section id="#404" className="section_hero">
        <img src={"../../../static/images/Hero-BGimg-mobile.png"} loading="lazy" className="image-hero" alt=""></img>
        <div className="hero-background"></div>
        <div className="hero-background right"></div>
        <div className="padding-global">
          <div className="container-large">
            <div className="hero_content-wrapper padding-vertical padding-large">
              <div className="title_wrapper max-width-large align-center" >
                <div className="center-content z-index-1">
                  <div className="text-align-center margin-vertical margin-small ">
                    <div
                        className="text-cut-off">
                      <h1 className="heading-style-h1 text-left-mobile">
                        Page Does Not Exists Yet or never did !
                      </h1>
                      <a href="https://changex.io"><button>Go to Home page</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  )
};

export default NotFoundPage;
