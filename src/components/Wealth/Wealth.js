import * as React from "react";
import {useState} from "react";
import { doubleApy, menuTabs, stake, stablecoins} from "./wealthItems";
import {StaticImage} from "gatsby-plugin-image";


export default function Wealth() {

    const [active, setActive] = useState('stake');

    function handleClick(id) {
        setActive(id);
    }

    return (
        <section id="wealth" className="section_invest">
            <div className="background-color-black">
                <div className="padding-global">
                    <div className="container-small">
                        <div className="padding-section-large no-padding-bottom">
                            <div className="max-width-large">
                                <div className="label is-lime">Invest with changex</div>
                                <h2 className="heading-style-h2 margin-bottom margin-small">Money that
                                    <span className="highlight is-green">never sleeps</span>
                                </h2>
                                <p className="text-size-large text-color-grey">
                                    Earn passive income like never before with DeFi’s most powerful investment tools.
                                </p>
                            </div>
                            <div data-current="Tabs"  data-easing="ease-out" data-duration-in="300"
                                 data-duration-out="100" className="tabs tabs-wealth margin-top margin-huge w-tabs">
                                <div className="tabs-menu w-tab-menu">
                                    {menuTabs.map((item, index)=> {
                                        return (
                                             <span id={item.id}
                                                onClick={() => handleClick(item.id)}
                                                className={active === item.id ? 'tab-link w-inline-block w-tab-link w--current' : 'tab-link w-inline-block w-tab-link'}>
                                                 <div>{item.title}</div>
                                             </span>
                                        )
                                    })}
                                </div>
                                <div className="max-width-full w-tab-content">
                                    {active === 'stake' &&
                                        <div id="Tab 1" className="w-tab-pane w--tab-active">
                                            <div className="tabwrapper animate__animated animate__fadeIn">
                                                <StaticImage
                                                    loading="lazy"
                                                    src={'../../../static/images/wealth/Lend-Stablecoins.png'}
                                                    alt={stake.alt}>
                                                </StaticImage>
                                                <p className="text-size-regular margin-vertical margin-medium">
                                                    {stake.text}
                                                </p>
                                            </div>
                                        </div>
                                    }

                                    {active === 'apy' &&
                                        <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active">
                                                <div className="tabwrapper animate__animated animate__fadeIn">
                                                    <StaticImage
                                                        loading="lazy"
                                                        src={'../../../static/images/wealth/Doubleapy.png'}
                                                        alt={doubleApy.alt}>
                                                    </StaticImage>
                                                    <p className="text-size-regular margin-vertical margin-medium">
                                                        {doubleApy.text}
                                                    </p>
                                                </div>
                                        </div>
                                    }

                                    {active === 'stablecoins' &&
                                        <div data-w-tab="Tab 3" className="w-tab-pane w--tab-active">
                                            <div className="tabwrapper animate__animated animate__fadeIn">
                                                <StaticImage
                                                    loading="lazy"
                                                    src={'../../../static/images/wealth/Lend-Stablecoins.png'}
                                                    alt={stablecoins.alt}>
                                                </StaticImage>
                                                <p className="text-size-regular margin-vertical margin-medium">
                                                    {stablecoins.text}
                                                </p>
                                            </div>

                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
