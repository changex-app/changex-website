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
            perksArray: [
                {
                    src: '/images/bank/CeDeFi.svg',
                    title: 'CeDeFI Model',
                    text: 'We’re employing a CeDeFi model, which takes the best sides of traditional finance and the incredible opportunities of blockchain technology.'
                },
                {
                    src: '/images/bank/your_monney.svg',
                    title: 'Simple, yet Powerful',
                    text: 'Tool to manage, invest, and grow your wealth on your own terms, so that you can focus on what matters most - your financial wellbeing and your vision for the future.'
                },
                {
                    src: '/images/bank/your_monney.svg',
                    title: 'Simple, yet Powerful',
                    text: 'Tool to manage, invest, and grow your wealth on your own terms, so that you can focus on what matters most - your financial wellbeing and your vision for the future.'
                }
            ],
            perksArray2: [
                {
                    src: '/images/bank/CeDeFi.svg',
                    title: 'Staking in a Non-custodial DeFi Wallet',
                    text: 'Staking has never been so easy: enable your users to stake their tokens from their mobile devices in a few clicks.'
                },
                {
                    src: '/images/bank/your_monney.svg',
                    title: 'Marketing Support',
                    text: 'Changex will promote your token to a savvy-defi community through our social media channels.'
                },
                {
                    src: '/images/bank/your_monney.svg',
                    title: 'Listing in top 20',
                    text: 'Get maximum attention for your token by placing it among the top 20 in our rankings on the “Buy” & “Stake” screens.'
                }
            ],
        }
}
