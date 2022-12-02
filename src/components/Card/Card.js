import * as React from "react";
import "../../../node_modules/animate.css/animate.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { cardItems } from './cardItems'
import {waitlistItems} from "../Waitlist/waitlistItem";
import { useState } from "react";
import Advantages from "../Advantages/Advantages";

export default function Card( { cardContent } ) {
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
                    setHasError(true)
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
        <section id="card" className="section_card overflow-hidden">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="card_wrapper margin-bottom margin-xhuge">
                            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp"
                                className="bank_wrapper-left form z-index-1 margin-vertical margin-large padding-horizontal padding-medium">
                                <div className="max-width-large">
                                    <h3 className="heading-style-h3 margin-bottom">{cardContent.head1}<br/> {cardContent.head2} <br/></h3>
                                    <h3 className="heading-style-h3 debitCard margin-bottom"> {cardContent.head3} </h3>
                                    <p>{cardContent.paragraph}</p>
                                    <h4>{waitlistItems.head1}</h4>
                                    <div className="w-form">
                                        {isShown && (
                                            <div className="sendgrid-subscription-widget widget-2368"
                                                 data-emailerror="Please enter a valid email address">
                                                <form onSubmit={HandleSubmit} data-token="0719662e9bb0cc2768bc17f2c5cfb745"
                                                      id="email-form" name="email-form" data-name="Email Form" method="get"
                                                      className="form">
                                                    <input type="email" className="email-field w-input"
                                                           maxLength="256" name="email"
                                                           placeholder="Enter your email" onChange={HandleChange}  value={formData}
                                                           required="">
                                                    </input>
                                                    <input
                                                        type="submit"
                                                        value="Sign up"
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
                            </AnimationOnScroll>
                            <div className="card_wrapper-right">
                                <div className="image-holder card-image">
                                    <img src="../../static/images/card/cards-img.png" loading="lazy" alt="changex cards"
                                         sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 50vw"
                                         srcSet="/images/card/cards-img-p-500.png 500w, /images/card/cards-img.png 729w"
                                         className="image-2">
                                    </img>
                                </div>
                            </div>
                        </div>
                        <Advantages advantages={ cardItems }/>
                    </div>
                </div>
            </div>
        </section>
    );
}
