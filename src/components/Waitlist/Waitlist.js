import * as React from "react";
import { useState } from "react";
import {waitlistItems} from "./waitlistItem";

export default function Waitlist(){
    const [isShown, setIsShown] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [formData, setFormData] = useState('');

    const HandleSubmit  = (event) => {
        if(isValidEmail(formData)) {
            event.preventDefault();

            fetch('https://app.sgwidget.com/v2/api/newsletter-signup', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData,
                    first_name: '',
                    last_name: '',
                    token: '0719662e9bb0cc2768bc17f2c5cfb745',
                })
            })
                .then(res => setIsShown(current => !current))
                .catch((err) => {
                    throw new Error(err)
                });

        } else {

        }

    }

    const HandleChange = (event) => {
        event.preventDefault();
        setFormData(event.target.value)
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    return (
        <section className="section_waitlist">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="waitlist-wrapper">
                            <div className="waitlist-wrapper-left max-width-large">
                                <div className="label is-green">{waitlistItems.coming}</div>
                                <h3 className="heading-style-h3 margin-bottom margin-medium">{waitlistItems.head1}</h3>
                                <div className="w-form">
                                    {isShown && (
                                        <div className="sendgrid-subscription-widget widget-2368"
                                             data-emailerror="Please enter a valid email address">
                                            <form onSubmit={HandleSubmit} data-token="0719662e9bb0cc2768bc17f2c5cfb745"
                                                  id="email-form" name="email-form" data-name="Email Form" method="get"
                                                  className="form">
                                                <input type="email" className="email-field w-input"
                                                       maxLength="256" name="email"
                                                       placeholder="Email Address" onChange={HandleChange}  value={formData}
                                                       required="">
                                                </input>
                                                <input
                                                    type="submit"
                                                    value="Sign me in"
                                                    data-wait="Please wait..."
                                                    className="email-submit w-button"
                                                ></input>
                                            </form>
                                        </div>)}
                                    {!isShown && (
                                        <div className="w-form-done">
                                            {waitlistItems.received}
                                        </div>
                                    )}

                                    {hasError && (
                                        <div className="w-form-fail">
                                            <div>{waitlistItems.error}</div>
                                        </div>
                                    )}
                                </div>
                                <div className="text-size-small">By subscribing you agree to ChangeX&nbsp;
                                    <a target="_blank" rel="noreferrer" href={waitlistItems.terms}
                                       className="link">Terms of Service
                                    </a>
                                    &nbsp; and provide consent to receive marketing
                                    communication and emails for special offers
                                </div>
                            </div>
                            <div className="waitlist-wrapper-right max-width-medium max-width-full-tablet">
                                <div className="waitlist-benefit-wrapper margin-vertical margin-medium">
                                    <div className="icon-wrapper-48">
                                        <img src="/images/icn-takepart.svg" loading="lazy" alt="take part"></img>
                                    </div>
                                    <p className="text-size-medium">{waitlistItems.paragraph1}
                                    </p>
                                </div>
                                <div className="waitlist-benefit-wrapper margin-vertical margin-medium">
                                    <div className="icon-wrapper-48">
                                        <img src="/images/icn-starwithcheckmark.svg" loading="lazy" alt="starwithcheckmark"></img>
                                    </div>
                                    <p className="text-size-medium">{waitlistItems.paragraph2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
