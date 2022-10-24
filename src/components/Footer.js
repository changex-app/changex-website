import * as React from "react";
import ChangeXLogoColor from "/static/images/Logo_footer.svg";
import TelegramPlane from "/static/images/cib_telegram-plane.svg";
import CarbonLogo from "/static/images/carbon_logo-medium.svg";
import { Link } from "react-scroll";

export default function Footer(){
    return(
        <div className="section_footer wf-section">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-small is-footer">
                        <div className="w-layout-grid footer-grid">
                           <Link to="hero" smooth={true} className="footer_logo-wrapper w-inline-block">
                                   <img src={ChangeXLogoColor} loading="lazy"></img>
                           </Link>
                            <div className="button-group">
                                <a target="_blank" rel="noreferrer"  href="https://firebasestorage.googleapis.com/v0/b/changex-io.appspot.com/o/changex-whitepaper-v4.pdf?alt=media&amp;token=85d7033d-ce62-4fd2-aefd-b50f2a758530"
                                   className="button is-link w-inline-block">
                                    <div className="text-color-black">Whitepaper</div>
                                </a>
                                <a target="_blank"  rel="noreferrer" href="https://legacy.changex.io/"
                                   className="button is-link w-inline-block">
                                    <div className="text-color-black">ICO Information</div>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://token.changex.io/"
                                   className="button is-secondary w-inline-block">
                                    <div>Investor&#x27;s Portal</div>
                                </a>
                            </div>
                            <div className="button-group align-right">
                                <a target="_blank" rel="noreferrer" href="https://t.me/changex_official"
                                   className="button social-link w-inline-block"><img
                                    src={TelegramPlane} loading="lazy"></img></a>
                                <a target="_blank" rel="noreferrer" href="https://twitter.com/ChangeXapp"
                                   className="button social-link w-inline-block">
                                    <div className="icon-1x1-small text-color-black w-embed">
                                        <svg aria-hidden="true" role="img" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <title>Twitter icon</title>
                                            <path
                                                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                                        </svg>
                                    </div>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://changex.medium.com/"
                                   className="button social-link w-inline-block"><img
                                    src={CarbonLogo} loading="lazy"></img></a>
                                <a target="_blank"  rel="noreferrer" href="https://www.facebook.com/ChangeXapp"
                                   className="button social-link w-inline-block">
                                    <div className="icon-1x1-small text-color-black w-embed">
                                        <svg aria-hidden="true" role="img" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <title>Facebook icon</title>
                                            <path
                                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                                        </svg>
                                    </div>
                                </a>
                                <a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/company/changexapp"
                                   className="button social-link w-inline-block">
                                    <div className="icon-1x1-small text-color-black w-embed">
                                        <svg aria-hidden="true" role="img" fill="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <title>LinkedIn icon</title>
                                            <path
                                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="footer-bottom w-row">
                            <div className="w-col w-col-6 w-col-stack">
                                <div className="text-size-small text-color-darkgrey">Copyright © 2022, Olympus Capital
                                    JSC,<br/> All trademarks and copyrights belong to their respective owners.</div>
                            </div>
                            <div className="w-col w-col-6 w-col-stack">
                                <div className="button-group align-right">
                                    <a target="_blank" rel="noreferrer" href="https://changex-io.web.app/privacy.html"
                                       className="legal_links text-size-small">Privacy Policy</a>
                                    <a target="_blank" rel="noreferrer" href="https://changex-io.web.app/terms.html"
                                       className="legal_links text-size-small">Terms of Service</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
