import * as React from "react";
import { ScanQrModal } from "../Utils/ScanQrCode";
import { Modal } from "@mui/material";
import { useState } from "react";

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
                                    className="highlight is-purple">Changex.</span>Earn Freedom</h2>
                                <p className="text-size-large text-color-darkgrey margin-vertical margin-large">Manage,
                                    invest, and grow your wealth with a Euro bank account, access to crypto, and DeFi
                                    investment tools.</p>
                            </div>
                            <div className="button-group centered-items margin-top margin-large spread align-left">
                                <a target="_blank" href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"
                                   className="button is-store w-inline-block">
                                    <img src="/images/DW-Apple.svg" loading="lazy" alt="App Store download image"
                                         width="150"></img>
                                    </a>
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=io.changex.app"
                                   className="button is-store w-inline-block">
                                    <img src="/images/DW-Google.svg" loading="lazy" width="150"
                                         alt="Google Play download image"></img>
                                </a>
                                <button onClick={openModal}
                                   className="button is-qr w-inline-block">
                                    <img src="/images/download-qr.svg" loading="lazy" width="75"
                                         alt="QR code image"
                                         className="qr-small">
                                        </img><p className="text-align-left text-size-regular">Scan To Download</p>
                                </button>

                            </div>
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
