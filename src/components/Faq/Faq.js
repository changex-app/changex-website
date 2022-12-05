import * as React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Typography from '@mui/material/Typography';
import AddCircle from '@mui/icons-material/Add';


export default function Faq( { title,  faqContent } ) {
    return(
        <section id="faqs" className="section_faq">
            <div className="padding-global background-color-black">
                <div className="container-large">
                    <div className="padding-section-large">
                        <AnimationOnScroll className="grid-2" animateIn="animate__fadeInUp" animateOnce={true}>
                            <div>
                                <div className="slide-from-bottom">
                                    <h2 className="heading-style-h2 text-align-center margin-vertical margin-medium">
                                        {title}
                                    </h2>
                                </div>
                                <div className="w-layout-grid faq-grid margin-vertical margin-huge slide-from-bottom">
                                    {faqContent.map((faq, index) => {
                                        return (
                                            <Accordion id={index.toString()} className="faq-question-bar w-inline-block">
                                                <AccordionSummary
                                                    expandIcon={<AddCircle />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header">
                                                    <Typography className="heading-style-h6 margin-null text-color-white">
                                                        {faq.title}
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography className="text-size-medium text-color-white">
                                                        {faq.content}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        )})}
                                </div>
                            </div>
                            <div style={{margin: "auto"}}>
                                <div className="slide-from-bottom contact">
                                    <h3 className="heading-style-h6">Still got questions?</h3>
                                    <p className="text-size-medium margin-vertical margin-small">
                                        Drop us a line at&nbsp;
                                        <a href="mailto:support@changex.io?subject=changex%20website"
                                           className="is-lime">support@changex.io
                                        </a>
                                        and we'll get back to you.
                                    </p>
                                    <div className="button-group centered-items">
                                        <a href="mailto:support@changex.io?subject=changex%20website"
                                           className="button button-lime w-button">Contact Us
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
