import hydrachain from "../../../static/images/partners/hydra-logo.webp";
import locktrip from "../../../static/images/partners/locktrip_logo.svg";
import bitcoingold from "../../../static/images/partners/logo-btg-1.png";
import unifarm from "../../../static/images/partners/unifrarm-logo.png";
import stakingrewards from "../../../static/images/partners/stakingrewards.svg";

export const logosParners = [
    {
        href: 'https://hydrachain.org/',
        src: hydrachain,
        name: 'cointelegraph logo'
    },
    {
        href: 'https://locktrip.com/',
        src: locktrip,
        name: 'bloomberg logo'
    },
    {
        href: 'https://bitcoingold.org/',
        src: bitcoingold,
        name: 'cryptoslate logo'
    },
    {
        href: 'https://unifarm.co/',
        src: unifarm,
        name: 'cryptopotato logo'
    },
    {
        href: 'https://www.stakingrewards.com/',
        src: stakingrewards,
        name: 'cryptopotato logo'
    }
]

export const heroPartnerObj = {
        titleObj: {
            h1: "Become a partner",
            h2: "Set up your token for success with Changex!",
            h3: "Streamline the entire process of staking your token inside an intuitive, non-custodial DeFi wallet, and expand your user base with our DeFi-savvy community.",
            h4: ""
        },
        text: "",
        appBtnsVisible: false,
        scrollBtnText: "",
        backgroundImage: '',
        quoteObject: {
            author: '',
            quote: '',
            role: '',
            img: ''
        },
        class: 'partnerPage',

        perks: {
            perksTitle: "Benefits Of Integrating",
            perksBtns: [
                {
                    text: "For Your Business"
                },
                {
                    text: "For Your Customers"
                }
            ],
            perks0: [
                {
                    src: '/images/partners/icn-staking-noncustodial.svg',
                    title: 'CeDeFI Model',
                    text: 'We’re employing a CeDeFi model, which takes the best sides of traditional finance and the incredible opportunities of blockchain technology.'
                },
                {
                    src: '/images/partners/icn-marketingsupport.svg',
                    title: 'Simple, yet Powerful',
                    text: 'Tool to manage, invest, and grow your wealth on your own terms, so that you can focus on what matters most - your financial wellbeing and your vision for the future.'
                },
                {
                    src: '/images/partners/icn-listingtop.svg',
                    title: 'Simple, yet Powerful',
                    text: 'Tool to manage, invest, and grow your wealth on your own terms, so that you can focus on what matters most - your financial wellbeing and your vision for the future.'
                }
            ],
            perks1: [
                {
                    src: '/images/partners/icn-zerocommision.svg',
                    title: 'Staking in a Non-custodial DeFi Wallet',
                    text: 'Staking has never been so easy: enable your users to stake their tokens from their mobile devices in a few clicks.'
                },
                {
                    src: '/images/partners/icn-debitcard.svg',
                    title: 'Marketing Support',
                    text: 'Changex will promote your token to a savvy-defi community through our social media channels.'
                },
                {
                    src: '/images/partners/icn-leveragedstaking.svg',
                    title: 'Listing in top 20',
                    text: 'Get maximum attention for your token by placing it among the top 20 in our rankings on the “Buy” & “Stake” screens.'
                }
            ],
        }
}

export const featureContent = {
    feature: [
        {
            h1: "Integrate your token for less.",
            h2: "",
            h3: "No integration fees. Changex requires a small investment of 2000 USD worth of CHANGE tokens. The CHANGE will then be automatically staked and vested for a period of 45 days. Once the vesting period is over partners can redeem their tokens with a hefty reward for their staking.",
            h4: "",
            buttonTxt: "Read Whitepaper",
            buttonUrl: "https://firebasestorage.googleapis.com/v0/b/changex-io.appspot.com/o/changex-whitepaper-v4.pdf?alt=media&amp;token=85d7033d-ce62-4fd2-aefd-b50f2a758530",
            buttonClass: "background-color-blue",
            imageUrl: "/images/partners/integrate-illustration.svg",
            imageClass: "centerImage",
            alignImage: 'right',
            commingSoon: true,
            offerText: 'Unique offer until 31.03.2023'
        }
    ]
}
