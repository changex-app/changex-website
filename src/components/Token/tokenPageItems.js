import hydrachain from "../../../static/images/partners/hydra-logo.webp";
import uniswap from "../../../static/images/partners/uniswap-logo.svg";
import mexc from "../../../static/images/partners/logo-btg-1.png";

export const heroObj = {
    titleObj: {
        h1: "Introducing",
        h2: "The CHANGE token",
        h3: "A multi-chain, multi-purpose token that offers added benefit of increased APR for every other staked asset in the app."
    },
    text: "",
    appBtnsVisible: false,
    scrollBtnText: "Buy CHANGE",
    backgroundImage: "",
    class: "tokenPage"
}

export const textData = {
    background: "background-color-blue",
    head: "",
    h1: "Discover Better Fiat With Changex Banking",
    h2: "",
    h3: "Opening a bank account with Changex happens in seconds and gives you access to a suite of financial services and perks for an easier life.",
    buttonTxt: "Read Whitepaper"

}


export const advantages = [
    {
        src: '/images/card/Mini/2.0/stack.svg',
        text: 'CHANGE has a fixed supply of 425 million tokens that favors growth: every transaction in Changex serves to reduce total supply and protect the price.',
        title: 'Burn'
    },
    {
        src: '/images/card/Mini/2.0/cashback.svg',
        text: 'Earn on your tokens with staking and power-up your CHANGE: every staked asset in Changex increases your CHANGE rewards. Bonuses stack.',
        title: 'Earn More'
    },
    {
        src: '/images/card/Mini/2.0/Boost_APY.svg',
        text: 'Stake or simply trade: CHANGE lets you jump between blockchains with ease - Hydra and Ethereum are yours to explore, with BSC and more to come.\n',
        title: 'Explore'
    },
    {
        src: '/images/card/Mini/2.0/yourMoney.svg',
        text: 'Unlock exclusive app features by holding and/or staking CHANGE in Changex: higher cashback, higher stablecoin APR, and more.\n',
        title: 'Get Benefits'
    }
]

export const tokenPageTokenomicsData = {
    head: 'CHANGE Tokenomics',
    head2: 'Explore the numbers',
    paragraph: '',
    chart: [
        {
            type: 'Public Sale',
            value: 150,
            color: '#3418D8'
        },
        {
            type: 'Treasury',
            value: 97.5,
            color: '#E0FB92'
        },
        {
            type: 'Tier 1 Institutional Investors',
            value: 50,
            color: '#11D48E'
        },
        {
            type: 'Launchpad Supply',
            value: 50,
            color: '#8366F4'
        },
        {
            type: 'Liquidity',
            value: 30,
            color: '#303D48'
        },
        {
            type: 'Founders & Team',
            value: 22.5,
            color: '#F3FBFD'
        },
        {
            type: 'Staking Pool for first 9 months',
            value: 20,
            color: '#F4DF22'
        },
        {
            type: 'Airdrop',
            value: 5,
            color: '#E69F34'
        }]
};

export const bannerLogos = [

    {
        href: 'https://www.mexc.com/',
        src: mexc,
        name: 'mexc'
    },
    {
        href: 'https://locktrip.com/',
        src: uniswap,
        name: 'uniswap'
    },
    {
        href: 'https://hydrachain.org/',
        src: hydrachain,
        name: 'hydrachain'
    }

]

export const bannerTitleTokenomics = {
    head: 'Buy',
    head2: 'CHANGE',
    head3: 'discover decentralized finance'
}
