import * as React from "react";
import { ScanQrModal } from "../../Utils/ScanQrCode";
import { Modal } from "@mui/material";
import { useState } from "react";
import {StaticImage} from "gatsby-plugin-image";

export default function Cta() {

    const [showModal, setShowModal] = useState(false)

    function openModal() {
        setShowModal(true);
    }

    return (
        <section id="cta" className="section_cta">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large is-cta-section">
                        <div className="max-width-medium">
                            <div>
                                <h2 className="heading-style-h2">Get <span
                                    className="highlight is-purple">Changex</span><br/>Earn Freedom</h2>
                                <p className="text-size-large text-color-darkgrey margin-vertical margin-large">Manage,
                                    invest, and grow your wealth with a Euro bank account, access to crypto, and DeFi
                                    investment tools.</p>
                            </div>
                            <div className="button-group centered-items margin-top margin-large spread align-left">

                                <a target="_blank"  rel="noreferrer" href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"
                                   className="button is-store-cta w-inline-block">
                                    <img src="/images/cta/DW%20Apple.svg"
                                         loading="lazy"
                                         alt="Changex App Store download"
                                         width="150">
                                    </img>
                                </a>


                                <a target="_blank"  rel="noreferrer" href="https://play.google.com/store/apps/details?id=io.changex.app"
                                   className="button is-store-cta w-inline-block">
                                    <img src="/images/cta/DW%20Google.svg"
                                         loading="lazy"
                                         width="150"
                                         alt="Changex Google Play download">
                                    </img>
                                </a>
                            </div>
                        </div>
                        <div className="cta-image">
                            <StaticImage src={'../../../static/images/cta/image_cta.png'} alt={'cta'}></StaticImage>
                            <button onClick={openModal}
                                    className="button is-qr-cta w-inline-block">
                                <img src="/images/download-qr.svg" loading="lazy" width="75"
                                     alt="Changex QR code"
                                     className="qr-small-cta">
                                </img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={showModal}>
                <ScanQrModal className="section-scanpopup wf-section"
                             showModal={showModal}
                             setShowModal={setShowModal}
                             aria-labelledby="modal-modal-title"
                             aria-describedby="modal-modal-description">
                </ScanQrModal>
            </Modal>
        </section>
    )
}
