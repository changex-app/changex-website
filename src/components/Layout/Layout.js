import * as React from "react"
import MetaDecorator from "../../Utils/MetaDecorator";
import content from "../../../static/assets/content/content.json";
import CookieConsentModal from "../../Utils/CookieConsent";
import Navigation from "../Navbar/Nav";
const imageUrl = "/assets/images/Changex-OG.jpeg"

export default function Layout({ children }) {
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
            { children }
        </>
    )
}
