import React from "react";
import { Helmet } from "react-helmet";
import 'rsuite/dist/rsuite.min.css';

const metaDecorator = require("../../static/assets/content/metaDecorator.json");

const MetaDecorator = ({ title, description, imageAlt, imageUrl }) => (
    <Helmet
        bodyAttributes={{
            class: "nk-body body-wider style"
        }}
    >
        <meta charSet="utf-8"/>
        <meta name="author" content="ChangeX"/>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metaDecorator.hostname + imageUrl} />
        <meta property="og:image:type" content='image/jpeg' />
        <meta property="og:url" content={metaDecorator.hostname}/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content={imageAlt} />
        <meta name="twitter:image" content={metaDecorator.hostname + imageUrl} />
        <meta name="twitter:image:src" content={metaDecorator.hostname + imageUrl} />
        <meta name="twitter:site" content={metaDecorator.twitterUsername} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta charSet="utf-8"/>
        <meta name="author" content="ChangeX"/>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="favicon.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="/assets/css/style.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet"/>
        <script type="text/javascript" src="//app.sgwidget.com/js/sg-widget-v2.js"></script>
    </Helmet>
    
);

export default MetaDecorator;
