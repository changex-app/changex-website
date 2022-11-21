import AppleBlackIcon from "../../../static/images/icn-apple-black.svg";
import PlaystoreBlackIcon from "../../../static/images/icn-playstore-black.svg";
import AppleIcon from "../../../static/images/DW-Apple.svg";
import GoogleIcon from "../../../static/images/DW-Google.svg";

export const menuItems = [
    {
        title: 'Bank',
        url: '/bank',
        id: 'bank',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        hasLine: false,
        submenu: [
            {
                title: 'Debit card',
                url: 'debitcard',
            },
            {
                title: 'SEPA Bank Account',
                url: 'sepabankaccount',
            }
        ]
    },
    {
        title: 'Wealth',
        url: '/wealth',
        id: 'wealth',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        hasLine: false,
        submenu: [
            {
                title: 'Staking',
                url: 'staking',
            },
            {
                title: 'Lending',
                url: 'lending',
            },
            {
                title: 'Savings',
                url: 'savings'
            },
        ]
    },
    {
        title: 'CHANGE Token',
        url: '/token-page',
        id: 'token-page',
        className: 'nav_menu-links w-nav-menu',
        hasLine: true,
        submenu: []
    },
    {
        title: 'About',
        url: '/about',
        id: 'about',
        className: 'nav_menu-links w-nav-menu',
        hasLine: false,
        submenu: []
    },
    /*{
        title: 'Wallet',
        url: '/wallet',
        id: 'wallet',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        submenu: [
            {
                title: 'DeFy Crypto Wallet',
                url: 'defycryptowallet',
            },
            {
                title: 'Swap Crypto',
                url: 'swapcrypto',
            },
            {
                title: 'Buy and Sell crypto',
                url: 'buysellcrypto',
            },
        ]
    },*/
   /* {
        title: 'FAQs',
        url: '/faqs',
        id: 'faqs',
        className: 'nav_menu-links w-nav-menu',
        dropdown: false,
        submenu: []
    }*/
/*    {
        title: 'Company',
        url: '/company',
        id: 'company',
        className: 'nav_menu-links w-nav-menu',
        submenu: []
    },
    {
        title: 'Learn',
        url: '/learn',
        id: 'learn',
        className: 'nav_menu-links w-nav-menu',
        submenu: []
    }*/
];

export const iconItems = [
    {
        src: AppleBlackIcon,
        href: 'https://apps.apple.com/bg/app/changex-wallet/id1613309180' ,
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'apple'
    },
    {
        src: PlaystoreBlackIcon,
        href: 'https://play.google.com/store/apps/details?id=io.changex.app',
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'google'
    }
]

export const mobileIcon = [
    {
        src: AppleIcon,
        href: 'https://apps.apple.com/bg/app/changex-wallet/id1613309180' ,
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'apple'
    },
    {
        src: GoogleIcon,
        href: 'https://play.google.com/store/apps/details?id=io.changex.app',
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'google'
    }
]
