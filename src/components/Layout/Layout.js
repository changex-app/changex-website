import * as React from "react"

import Header from "../header";
import Footer from "../Footer";
import MetaDecorator from "../../Utils/MetaDecorator";
import content from "../../../static/assets/content/content.json";
const imageUrl = "/assets/images/Changex-OG.jpeg"

export default function Layout({ children }) {
    return (
        <div className="wrap">
            <MetaDecorator
                description={content.pageDescription}
                title={content.pageTitle}
                imageAlt={content.metaImageAlt}
                imageUrl={imageUrl}
            />
            <Header></Header>
                { children }
            <Footer></Footer>
        </div>
    )
}
