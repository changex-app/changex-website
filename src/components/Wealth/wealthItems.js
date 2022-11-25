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

export const sliderData = [
    {
        id: "Tab1",
        image: "/images/wealth/Benefits.svg",
        alt: "Investment Slider image for stake",
        text: "Staking any Proof-of-Stake asset in Changex boosts your CHANGE staking APR. Stake more assets to stack your boost and retain access to the tokens with liquid staking.",
        linkText: "Discover Staking",
        url: "/staking"
    },
    {
        id: "Tab2",
        image: "/images/wealth/Leveraged.svg",
        alt: "Investment Slider image for double your APY",
        text: "Use Changex's unique Leveraged staking product to amplify the staking rewards of any Proof-of-Stake asset by 1.2-2x and earn like never before.",
        linkText: "Discover Leveraged Staking",
        url: "/savings"
    },
    {
        id: "Tab3",
        image: "/images/wealth/Stablecoins.svg",
        alt: "Investment Slider image for lend stablecoins",
        text: "Lend your stablecoins for 5-9.5% APR and power the Leveraged staking economy. Everything is completely decentralized.",
        linkText: "Discover Lending",
        url: "/lending"
    }
]


export const responsiveSliderData =  {
    additionalTransfrom: 0,
    autoPlaySpeed: 3000,
    centerMode: false,
    arrows: false,
    className: "",
    containerClass: "container",
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
    rtl: true,
    renderButtonGroupOutside: true,
    shouldResetAutoplay: true,
    showDots: true,
    sliderClass:"",
    slidesToSlide: 1,
    swipeable: true
}
