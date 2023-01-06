import Staking_1 from "../../../static/images/wealth/Staking_1.svg";
import Doubleapy from "../../../static/images/wealth/Doubleapy.svg";
import Stablecoins from "../../../static/images/wealth/Lend-Stablecoins.svg";


export const menuTabs = [
    {
        id: "stake",
        title: "Stake",
        text: "Staking any Proof-of-Stake asset in Changex boosts your CHANGE staking APR. Stake more assets to stack your boost and retain access to the tokens with liquid staking.",
        img: Staking_1,
        alt: "Investment Slider image for stake",
    },
    {
        id: "apy",
        title: "Double your APY",
        text: "Use Changex's unique Leveraged staking product to amplify the staking rewards of any Proof-of-Stake asset by 1.2-2x and earn like never before.",
        img: Doubleapy,
        alt: "Investment Slider image for double your APY",
    },
    {
        id: "stablecoins",
        title: "Lend stablecoins",
        text: "Lend your stablecoins for 5-9.5% APR and power the Leveraged staking economy. Everything is completely decentralized.",
        img: Stablecoins,
        alt: "Investment Slider image for lend stablecoins",
    }
]

export const stake = {
    id: "Tab 1",
    alt: "Investment Slider image for stake",
    text: "Staking any Proof-of-Stake asset in Changex boosts your CHANGE staking APR. Stake more assets to stack your boost and retain access to the tokens with liquid staking."
}

export const doubleApy = {
    id: "Tab 2",
    alt: "Investment Slider image for double your APY",
    text: "Use Changex's unique Leveraged staking product to amplify the staking rewards of any Proof-of-Stake asset by 1.2-2x and earn like never before."
}

export const stablecoins = {
    id: "Tab 3",
    alt: "Investment Slider image for lend stablecoins",
    text: "Lend your stablecoins for 5-9.5% APR and power the Leveraged staking economy. Everything is completely decentralized."
}

export const sliderDataLandingPage = [
    {
        id: "Tab1",
        image: "/images/wealth/LeveragedStakingBlack.svg",
        head: "",
        alt: "Investment Slider image for stake",
        text: "Staking any Proof-of-Stake asset in Changex boosts your CHANGE staking APR. Stake more assets to stack your boost and retain access to the tokens with liquid staking.",
        linkText: "Discover Staking",
        url: "/staking"
    },
    {
        id: "Tab2",
        image: "/images/wealth/Benefits_Black.svg",
        head: "",
        alt: "Investment Slider image for double your APY",
        text: "Use Changex's unique Leveraged staking product to amplify the staking rewards of any Proof-of-Stake asset by 1.2-2x and earn like never before.",
        linkText: "Discover Leveraged Staking",
        url: "/savings"
    },
    {
        id: "Tab3",
        image: "/images/wealth/Stablecoins.svg",
        head: "",
        alt: "Investment Slider image for lend stablecoins",
        text: "Lend your stablecoins for 5-9.5% APR and power the Leveraged staking economy. Everything is completely decentralized.",
        linkText: "Discover Lending",
        url: "/lending"
    }
]

export const sliderDataWealthPage = [
    {
        id: "card1",
        image: "/images/wealth/StakingWealth.svg",
        head: "Flexible Stakind And Spending",
        alt: "Flexible Stakind And Spending",
        text: "Stake assets and maintain immediate access to them without interrupting the flow of rewards. This is a unique way to use your crypto in various ways while earning on it constantly.",
        linkText: "",
        url: ""
    },
    {
        id: "card2",
        image: "/images/wealth/Hydra.svg",
        head: "Delegated HYDRA Staking",
        alt: "Delegated HYDRA Staking",
        text: "Stake HYDRA offline and enjoy the full benefits of the HydraChain economy by delegating your coins to a staker. Rewards equal to 5 HYDRA or more are paid out daily.",
        linkText: "",
        url: ""
    },
    {
        id: "card3",
        image: "/images/wealth/WealthChange.svg",
        head: "Earn Bonus CHANGE",
        alt: "Earn Bonus CHANGE",
        text: "Whenever you stake an asset in Changex, the APR for your staked CHANGE goes up, and the bonuses stack. Without CHANGE, this mechanism is not possible.",
        linkText: "",
        url: ""
    }
]

export const responsiveSliderData =  {
    additionalTransfrom:0,
    autoPlaySpeed: 1000,
    autoPlay: true,
    centerMode: false,
    arrows: false,
    className: "",
    containerClass: "container-wealth",
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass:"",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    partialVisible: true,
    pauseOnHover: true,
    renderArrowsWhenDisabled: false,
    renderDotsOutside: false,
    rewind: true,
    rewindWithAnimation: true,
    rtl: false,
    renderButtonGroupOutside: true,
    shouldResetAutoplay: false,
    showDots: true,
    sliderClass:"",
    slidesToSlide: 1,
    swipeable: true,
    responsive: {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1025
            },
            items: 2,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 1,
            partialVisibilityGutter: 30
        }
    }
}
