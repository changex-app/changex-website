import * as React from "react";
import CookieConsent from "react-cookie-consent";

export default function CookieConsentModal(){
    return (
        <div>
        <CookieConsent containerClasses="cookies animate__animated animate__fadeInUp"
                       overlayClasses="content"
            location="bottom"
            buttonText="Accept"
            cookieName="changex.io-cookie-concent"
            cookieSecurity='true'
            flipButtons='true'
            declineButtonClasses="declineBtn"
            expires={30}
            buttonClasses="accept"
            buttonWrapperClasses="btnWrrapper"
                       declineButtonText="I Decline"
                       enableDeclineButton
        >
            <div className='cookies_wrappers'>
                <div style={{paddingLeft: "2.5rem"}}>
                    <p className="cookiesText">
                               Our website uses "Cookies" so that we can provide services at the highest level to our customers.<br/> By continuing, you agree to their use.
                               <br/>To find out more information see our <a style={{color: "#3418d8"}} rel="noreferrer"  target="_blank" href="https://changex-io.web.app/privacy.html">Privacy policy.</a>
                    </p>
                </div>
            </div>

        </CookieConsent>
        </div>
    )
}
