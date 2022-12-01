import * as React from "react";
import {BiChevronRight, FiChevronLeft} from "react-icons/all";
import {BiChevronLeftCircle, BiChevronRightCircle} from "react-icons/bi";

export const scrollImages = [
    {
        src: '/images/wallet/icn-40x40-wallet.svg',
        caption: 'Decentralyzed Crypto wallet',
        text: 'Access crypto from any point on Earth and stay in control with Changex’s highly-secure, non-custodial crypto wallet. No KYC required',
        url: 'https://changex.io',
        urlText: 'Learn More',
        h1: 'Wallet'
    },
    {
        src: '/images/wallet/icn-40x40-wallet.svg',
        caption: 'A wallet just for you',
        text: 'Own your crypto - Changex has no control over your wallet and can never access your funds. All information is kept safely on the blockchain',
        url: 'https://changex.io',
        urlText: 'Download the app',
        h1: 'Wallet'
    },
    {
        src: 'images/wallet/scroll_4.svg',
        caption: 'Buy and sell crypto',
        text: 'Trade cryptocurrencies with the click of a button with vetted protocols and contracts.',
        url: 'https://changex.io',
        urlText: "Download the app",
        h1: 'Wallet'
    },
];

export const slideImages = [
    {
        url: '/images/wallet/cryptowallet_0.png',
    },
    {
        url: '/images/wallet/cryptowallet_1.png',
    },
    {
        url: 'images/wallet/cryptowallet_2.png',
    }
];

export const properties = {
    duration: 5000,
    autoplay: true,
    defaultIndex: 0,
    transitionDuration: 500,
    arrows: true,
    infinite: true,
    easing: "linear",
};

export const SliderOptions = {
    useGPURender: true,
    showNavs: false,
    showBullets: true,
    loop: true,
    autoPlay: true,
    autoPlayDelay: 1000,
    startIndex: 0,
    duration: 5000,
};


export const responsiveSliderData =  {
    additionalTransfrom: 0,
    autoPlaySpeed: 3000,
    centerMode: false,
    arrows: false,
    className: "",
    containerClass: "container-wallet",
    dotListClass: "dotListClass",
    draggable: true,
    focusOnSelect: false,
    infinite: false,
    itemClass:"",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    partialVisible: false,
    pauseOnHover: true,
    renderArrowsWhenDisabled: false,
    renderDotsOutside: true,
    rewind: false,
    rewindWithAnimation: false,
    rtl: false,
    renderButtonGroupOutside: true,
    shouldResetAutoplay: true,
    showDots: true,
    sliderClass:"",
    slidesToSlide: 1,
    swipeable: true
}
