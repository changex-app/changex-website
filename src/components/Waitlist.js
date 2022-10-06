import * as React from "react";
import { useState } from "react";


export default function Waitlist(){
    const [isShown, setIsShown] = useState(true);
    const [formData, setFormData] = useState('');

    const HandleSubmit  = () => {

        if(isValidEmail(formData)) {
            setIsShown( current => !current);
            fetch("http://localhost:8000", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData, // Use your own property name / key
                }),
            })
                .then(data => {

                    setFormData('');
                })
                .catch(err => {
                    console.log();
                });
        } else {

        }
    }

    const HandleChange = (event) => {
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
                                <div className="label is-green">Coming: Q1 2023</div>
                                <h3 className="heading-style-h3 margin-bottom margin-medium">Join the Card Waitlist</h3>
                                <div className="w-form">
                                    {isShown && (
                                        <form onSubmit={HandleSubmit} id="email-form" name="email-form" data-name="Email Form" method="get"
                                              className="form">
                                            <input type="email" className="email-field w-input"
                                                   maxLength="256" name="email"
                                                   placeholder="Email Address"  value={formData}
                                                   onChange={HandleChange} required="">
                                            </input>

                                            <input type="submit"
                                                   value="Sign me in"
                                                   data-wait="Please wait..."
                                                   className="email-submit w-button">
                                            </input>

                                        </form>
                                    )}
                                    {isShown === false && (
                                        <div className="w-form-done">
                                            Thank you! Your submission has been received!
                                        </div>
                                    )}
                                    <div className="w-form-fail">
                                        <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>
                                <div className="text-size-small">By subscribing you agree to ChangeX <a
                                    href="https://token.changex.io/terms-and-condition"
                                    className="link">Terms of Service</a> and provide consent to receive marketing
                                    communication and emails for special offers
                                </div>
                            </div>
                            <div className="waitlist-wrapper-right max-width-medium max-width-full-tablet">
                                <div className="waitlist-benefit-wrapper margin-vertical margin-medium">
                                    <div className="icon-wrapper-48"><img src="/images/icn-takepart.svg" loading="lazy"
                                                                          alt=""></img></div>
                                    <p className="text-size-medium">Climb the ranks of the waitlist by taking part in
                                        community activities and accumulating points!</p>
                                </div>
                                <div className="waitlist-benefit-wrapper margin-vertical margin-medium">
                                    <div className="icon-wrapper-48"><img src="/images/icn-starwithcheckmark.svg"
                                                                          loading="lazy" alt=""></img></div>
                                    <p className="text-size-medium">The higher you rank, the more likely to be one of
                                        the first to receive their card with multiple rewards and benefits.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
