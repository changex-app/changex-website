import * as React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Typography from '@mui/material/Typography';
import AddCircle from '@mui/icons-material/Add';


export default function Faq( { background, title,  faqContent } ) {
    return(
        <section id="faqs" className="section_faq">
            <div className={`padding-global ${background}`}>
                <div className="container-large">
                    <div className="margin-section-medium">
                        <AnimationOnScroll className="grid-2" animateIn="animate__fadeInUp" animateOnce={true}>
                            <div>
                                <div className="slide-from-bottom">
                                    <h2 className="heading-style-h2 text-align-center margin-vertical margin-medium">
                                        {title}
                                    </h2>
                                </div>
                                <div className="w-layout-grid faq-grid margin-vertical slide-from-bottom">
                                    {faqContent.map((faq, index) => {
                                        return (
                                            <Accordion id={index.toString()} className="faq-question-bar w-inline-block">
                                                <AccordionSummary
                                                    expandIcon={<AddCircle />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header">
                                                    <Typography
                                                        className={`heading-style-h6 margin-null ${background === "background-color-off-white" ? "text-color-black" : "text-color-white"}`}>
                                                        {faq.title}
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography
                                                        className={`heading-style-h7 margin-null ${background === "background-color-off-white" ? "text-color-black" : "text-color-white"}`}>
                                                        {faq.content}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        )})}
                                </div>
                            </div>
                            <div style={{margin: "auto"}}>
                                <div  className={ `slide-from-bottom contact ${background === "background-color-off-white" ? "contact-border-blue" : "contact-border-lime"}`}>
                                    <h5 className="heading-style-h5">Still got questions?</h5>
                                    <p className="text-size-medium margin-vertical margin-small">
                                        Drop us a line at&nbsp;
                                        <a href="mailto:support@changex.io?subject=changex%20website"
                                           className={`${background === "background-color-off-white" ? "highlight is-blue" : "is-lime"}`}>
                                            support@changex.io&nbsp;
                                        </a>
                                        and we'll get back to you.
                                    </p>
                                    <div className="button-group centered-items">
                                        <a href="mailto:support@changex.io?subject=changex%20website"
                                            className={ `button w-button ${background === "background-color-off-white" ? "button-off-white" : "button-lime"}`}>Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </section>
    )
}
