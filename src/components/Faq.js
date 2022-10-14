import * as React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircle from '@mui/icons-material/Add';
import { SiAddthis } from "react-icons/si";
import { FaPlusCircle } from "react-icons/fa";

export const faqContent = [
    {
        title: 'What is a DeFi non-custodial wallet?',
        content: 'A non-custodial wallet lets you safely store your crypto assets under your full control. ' +
            'No central authority has access to them. Since Changex’s wallet is non-custodial, ' +
            'it gives you complete custody and ownership of your crypto assets. ' +
            'Changex is the developer, but not the owner of your funds. This means that, when it' +
            ' comes to crypto, you are “your own bank” and you have exclusive control over your funds. ' +
            'To use the wallet, you do not need to register, go through KYC procedures and you can remain anonymous. ' +
            'The DeFi part means that your non-custodial wallet also allows you to connect to and use different' +
            ' decentralized applications and protocols through the use of smart contracts in order to e.g. swap assets ' +
            'on different chains or to stake them in order to generate profit.',
        img: '/images/plus.svg'
    },
    {
        title: 'What is the CHANGE token?',
        content: 'CHANGE is the native' +
            'multi-chain token of the Changex app. CHANGE is burned with every ' +
            'fiat-crypto and crypto-crypto transaction in ChangeX: supply decreases and ' +
            'the token appreciates. If you are staking CHANGE, staking any other PoS ' +
            'asset boosts your CHANGE APR via commissions applied to their staking pools. ' +
            'As CHANGE is burned, the value of the rewards increases: the rewards become ' +
            ' higher, and the supply decreases. CHANGE will also be used to unlock ' +
            'exclusive features in the app.',
        img: '/images/plus.svg'
    },
    {
        title: 'When is banking expected?',
        content: 'As per our roadmap, our banking services should be operational in the first months of 2023. This is ' +
            'also when we expect to begin shipping out the first Changex Crypto Debit Cards.',
        img: '/images/plus.svg'
    },
    {
        title: 'How does the card work?',
        content: 'The Changex Crypto Debit Card is connected to your wallet and your bank account at the same time. Using' +
            ' the app, you can choose what you want to use for spending - either Euro or any token that you have in the app.',
        img: '/images/plus.svg'
    },
    {
        title: 'Will ChangeX banking expand beyond Europe?',
        content: 'Banking and card services are expected to have a global coverage. After the launch in the EU in the' +
            'beginning of 2023, we are planning to add more supported regions in North America and Asia in late 2023.',
        img: '/images/plus.svg'
    }
]

export default function Faq() {
    return(
        <section className="section_faq">
            <div className="padding-global background-color-grey">
                <div className="container-small">
                    <div className="padding-section-large">
                        <div>
                            <div className="slide-from-bottom">
                                <h2 className="heading-style-h2 text-align-center margin-vertical margin-medium">Frequently
                                    Asked</h2>
                                <p className="text-size-medium text-align-center">Did we miss something? Drop us a line
                                    at <a href="mailto:support@changex.io?subject=changex%20website"
                                          className="text-style-link">support@changex.io</a> - we’d love to hear from
                                    you.</p>
                            </div>
                            <div className="w-layout-grid faq-grid margin-vertical margin-huge slide-from-bottom">
                                {faqContent.map((faq, index) => {
                                    return (
                                        <Accordion className="faq-question-bar w-inline-block">
                                            <AccordionSummary
                                                expandIcon={<AddCircle />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography className="heading-style-h5">{faq.title}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography className="text-size-medium text-color-darkgrey">
                                                    {faq.content}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    )})}


                                {/*{faqContent.map((faq, index) => {
                                    return (
                                        <div className="faq-question-wrap">
                                            <a href="#" className="faq-question-bar w-inline-block">
                                                <div className="heading-style-h5">{faq.title}</div>
                                                <div className="faq-circle"><img src={faq.img} alt=""
                                                                                 className="plus-icon"></img></div>
                                            </a>
                                            <div style={{height:0}} className="faq-content">
                                                <div className="div-block-2"></div>
                                                <p className="text-size-medium text-color-darkgrey">{faq.content}</p>
                                            </div>
                                        </div>
                                    )
                                })}*/}
                            </div>
                            <div className="slide-from-bottom">
                                <h3 className="heading-style-h3 text-align-center">Still got questions?</h3>
                                <p className="text-size-medium text-align-center margin-vertical margin-small">Drop us a
                                    line at <a href="mailto:support@changex.io?subject=changex%20website"
                                               className="text-style-link">support@changex.io</a>, we’d love to hear
                                    from you.</p>
                                <div id="w-node-a04bfb96-6220-1485-08a2-45cfc46a9303-0541c3c1"
                                     className="button-group centered-items">
                                    <a id="w-node-ed6b061c-b0a7-01e0-7684-22ee82e02d75-0541c3c1"
                                       href="mailto:support@changex.io?subject=changex%20website"
                                       className="button is-large is-secondary  w-button">Contact
                                        Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
