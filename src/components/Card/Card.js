import * as React from "react";
import "../../../node_modules/animate.css/animate.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { cardItems } from './cardItems'
import {waitlistItems} from "../Waitlist/waitlistItem";
import { useState } from "react";

const cardContent = {
    head2: 'Meet Your Crypto Debit Card',
    head3: 'Virtual or physical - it’s always there for you.',
    paragraph: 'Connected to your wallet and bank account, the Changex Crypto Debit Card lets you spend anything, anywhere. Yes, Euro and any crypto token in the app. Just choose whatever works best for you.'

}

export default function Card() {
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
                                className="bank_wrapper-left z-index-1 margin-vertical margin-large padding-horizontal padding-medium">
                                <div className="max-width-large">
                                    <h3 className="heading-style-h3 margin-bottom">Meet the<br/> ChangeX<br/></h3>
                                    <h3 className="heading-style-h3 debitCard"> Debit Card</h3>
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
                            <div className="bank_wrapper-right">
                                <div className="image-holder card-image">
                                    <img src="/images/card/img-card-bg.png"
                                         loading="lazy"
                                         srcSet="/images/card/img-card-bg-p-500.png 500w, /images/card/img-card-bg-p-800.png 800w, /images/card/img-card-bg-p-1080.png 1080w, /images/img-card-bg-p-1600.png 1600w,  /images/card/img-card-bg-p-2000.png 2000w, /images/card/img-card-bg.png 2306w"
                                         sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 100vw"
                                         alt="changex card"
                                         className="image-card margin-vertical margin-large">

                                    </img>
                                    <div className="image-circle is-bigger top-left"></div>
                                    <img src="../../static/images/card/cards-img.png" loading="lazy" alt="changex cards"
                                         sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, 50vw"
                                         srcSet="/images/card/cards-img-p-500.png 500w, /images/card/cards-img.png 729w"
                                         className="image-2">
                                    </img>
                                </div>
                            </div>
                        </div>
                        <div className="spacer spacer-huge"></div>
                        <h3 className="heading-style-h3 margin-vertical margin-large">More than a card - it’s
                            freedom</h3>
                        <div className="w-layout-grid grid-4">
                            {cardItems.map((card, index)=> {
                                return (
                                    <div id={index.toString()} className="box-container">
                                        <div className="padding-medium">
                                            <div className="icon-wrapper margin-bottom margin-medium">
                                                <img src={card.src} loading="lazy" alt="" width={card.width} className="icon"></img>
                                            </div>
                                            <p className="margin-top margin-large">{card.text}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
