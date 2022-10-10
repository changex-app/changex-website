import * as React from "react";
import {useState} from "react";
import Staking_1 from "/static/images/wealth/Staking_1.svg"
import Doubleapy from "/static/images/wealth/Doubleapy.svg"
import Stablecoins from "/static/images/wealth/Lend-Stablecoins.svg"

const menuTabs = [
    {
        id: "stake",
        key: "isStakeClicked",
        title: "Stake",
        text: "Staking any Proof-of-Stake asset in Changex boosts your CHANGE staking APR. Stake more assets to stack your boost and retain access to the tokens with liquid staking.",
        img: Staking_1,
        alt: "Investment Slider image for stake",
    },
    {
        id: "apy",
        key: "isAPYClicked",
        title: "Double your APY",
        text: "Use Changex's unique Leveraged Staking product to amplify the staking rewards of any Proof-of-Stake asset by 1.2-2x and earn like never before.",
        img: Doubleapy,
        alt: "Investment Slider image for double your APY",
    },
    {
        id: "stablecoins",
        key: "isStableCoinsClicked",
        title: "Lend stablecoins",
        text: "Lend your stablecoins for 5-9.5% APR and power the Leveraged Staking economy. Everything is completely decentralized.",
        img: Stablecoins,
        alt: "Investment Slider image for lend stablecoins",
    }
]

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
                                <h2 className="heading-style-h2 margin-bottom margin-small">Money that <span
                                    className="highlight is-green">never sleeps</span></h2>
                                <p className="text-size-large text-color-grey">Earn passive income like never before
                                    with DeFi’s most powerful investment tools.</p>
                            </div>
                            <div data-current="Tabs"  data-easing="ease-out" data-duration-in="300"
                                 data-duration-out="100" className="tabs margin-top margin-huge w-tabs">
                                <div className="tabs-menu w-tab-menu">

                                    <a data-w-tab="Tab 1"
                                       className={active === 'stake' ? 'tab-link w-inline-block w-tab-link w--current' : 'tab-link w-inline-block w-tab-link'}
                                       onClick={() => handleClick('stake')}>
                                        <div>Stake</div>
                                    </a>
                                    <a data-w-tab="Tab 2"
                                       className={active === 'apy' ? 'tab-link w-inline-block w-tab-link w--current' : 'tab-link w-inline-block w-tab-link'}
                                       onClick={() => handleClick( 'apy')}>
                                        <div>Double your APY</div>
                                    </a>
                                    <a data-w-tab="Tab 3"
                                       className={active === 'stablecoins' ? 'tab-link w-inline-block w-tab-link w--current' : 'tab-link w-inline-block w-tab-link'}
                                       onClick={() => handleClick('stablecoins')}>
                                        <div>Lend stablecoins</div>
                                    </a>
                                    {/*{menuTabs.map((item)=> {
                                        return (
                                            <a id={item.id} key={item.key} onClick={(item) => handleClick(true,item.currentTarget.id)}
                                               className={isClicked ? 'tab-link w-inline-block w-tab-link w--current' : 'tab-link w-inline-block w-tab-link'}>
                                                <div>{item.title}</div>
                                            </a>
                                        )
                                    })}*/}
                                </div>
                                <div className="max-width-full w-tab-content">
                                    {active === 'stake' &&
                                        <div id="Tab 1" className="w-tab-pane w--tab-active">
                                            <div className="tabwrapper animate__animated animate__fadeIn"><img
                                                loading="lazy"
                                                src="/images/wealth/Staking_1.svg"
                                                alt="Investment Slider image for stake"></img>
                                                <p className="text-size-regular margin-vertical margin-medium">Staking
                                                    any
                                                    Proof-of-Stake asset in Changex boosts your CHANGE staking APR.
                                                    Stake
                                                    more assets to stack your boost and retain access to the tokens with
                                                    liquid staking.</p>
                                            </div>

                                        </div>
                                    }

                                    {active === 'apy' &&
                                        <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active">
                                                <div className="tabwrapper animate__animated animate__fadeIn"><img
                                                    loading="lazy"
                                                    src="/images/wealth/Doubleapy.svg"
                                                    alt="Investment Slider image for double your APY"></img>
                                                    <p className="text-size-regular margin-vertical margin-medium">Use
                                                        Changex&#x27;s unique Leveraged Staking product to amplify the
                                                        staking
                                                        rewards of any Proof-of-Stake asset by 1.2-2x and earn like
                                                        never
                                                        before.</p>
                                                </div>
                                            }
                                        </div>
                                    }
                                    {active === 'stablecoins' &&
                                        <div data-w-tab="Tab 3" className="w-tab-pane w--tab-active">
                                            <div className="tabwrapper animate__animated animate__fadeIn"><img
                                                loading="lazy"
                                                src="/images/wealth/Lend-Stablecoins.svg"
                                                alt="Investment Slider image for lend stablecoins"></img>
                                                <p className="text-size-regular margin-vertical margin-medium">Lend your
                                                    stablecoins for 5-9.5% APR and power the Leveraged Staking economy.
                                                    Everything is completely decentralized.</p>
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
