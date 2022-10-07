import * as React from "react";

export default function Cta() {
    return (
        <section className="section_cta">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large is-cta-section">
                        <div className="max-width-medium">
                            <div>
                                <h2 className="heading-style-h2">Get <span
                                    className="highlight is-purple">Changex.</span>Earn Freedom</h2>
                                <p className="text-size-large text-color-darkgrey margin-vertical margin-large">Manage,
                                    invest, and grow your wealth with a Euro bank account, access to crypto, and DeFi
                                    investment tools.</p>
                            </div>
                            <div className="button-group centered-items margin-top margin-large spread align-left">
                                <a href="https://apps.apple.com/bg/app/changex-wallet/id1613309180" target="_blank"
                                   className="button is-store w-inline-block">
                                    <img src="/images/DW-Apple.svg" loading="lazy" alt="App Store download image"
                                         width="150"></img>
                                    </a>
                                <a href="https://play.google.com/store/apps/details?id=io.changex.app" target="_blank"
                                   className="button is-store max-width-full-mobile-portrait w-inline-block">
                                    <img src="/images/DW-Google.svg" loading="lazy" width="150"
                                         alt="Google Play download image"></img>
                                </a>
                                <a data-w-id="fc206e65-714f-aaac-d081-2309765479aa" href="#"
                                   className="button is-qr w-inline-block">
                                    <img src="/images/download-qr.svg" loading="lazy" width="75"
                                         alt="QR code image"
                                         className="qr-small">
                                        </img><p className="text-align-left text-size-regular">Scan To Download</p>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
