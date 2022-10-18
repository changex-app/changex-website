import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Helmet } from "react-helmet";

// markup
const NotFoundPage = () => {
  return (
    <div class="wrap ov-h">
      <div class="container">
        <main class="pages nk-pages-centered tc-light px-0 text-center">
          <header class="pt-5">
            <a href="./" class="d-inline-block logo-lg">
              <img
                src="/src/assets/images/icon.png"
                alt="logo"
              />
            </a>
          </header>
          <div class="my-auto py-5">
            <Helmet
              bodyAttributes={{
                class: "nk-body body-wider theme-dark mode-onepage",
              }}
            >
              <meta charset="utf-8" />
              <meta name="author" content="Softnio" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <meta name="description" content="" />
              <link rel="shortcut icon" href="images/favicon.png" />
              <title>
                Lungwort | ICO Crypto - ICO Landing Page &amp; Multi-Purpose
                Cryptocurrency HTML Template
              </title>

              <link
                rel="stylesheet"
                href="assets/css/vendor.bundle.css?ver=195"
              />
              <link rel="stylesheet" href="assets/css/style-dark.css" />
              <link rel="stylesheet" href="assets/css/theme.css?ver=195" />
            </Helmet>
            <div class="row justify-content-center">
              <div class="col-xl-6 col-md-7 col-sm-9">
                <div class="position-relative">
                  <div class="piller-one">
                    <StaticImage
                      src="../../static//assets/images/piler-a.png"
                      alt="graphic"
                    />
                  </div>
                  <div class="piller-two">
                    <StaticImage
                      src="../../static//assets/images/piler-b.png"
                      alt="graphic"
                    />
                  </div>
                  <h2 class="title-xxl-grad">404</h2>
                  <h5 class="pb-2">Opps! Why you’re here?</h5>
                  <p class="">
                    We are very sorry for inconvenience. It looks like you’re
                    try to access a page that either has been deleted or never
                    existed.
                  </p>
                  <a href="/" class="btn btn-grad btn-md btn-round">
                    Back to home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NotFoundPage;
