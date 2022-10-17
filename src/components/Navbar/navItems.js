import AppleBlackIcon from "../../../static/images/icn-apple-black.svg";
import PlaystoreBlackIcon from "../../../static/images/icn-playstore-black.svg";
import AppleIcon from "../../../static/images/DW-Apple.svg";
import GoogleIcon from "../../../static/images/DW-Google.svg";

export const menuItems = [
    {
        title: 'Wallet',
        url: '/wallet',
        id: '#wallet',
        className: 'nav_menu-links w-nav-menu',
        submenu: [
            {
                title: 'DeFy Crypto Wallet',
                url: 'defy-crypto-wallet',
            },
            {
                title: 'Swap Crypto',
                url: 'swap-crypto',
            },
            {
                title: 'Buy and Sell crypto',
                url: 'buy-sell-crypto',
            },
        ]
    },
    {
        title: 'Bank',
        url: '/bank',
        id: '#bank',
        className: 'nav_menu-links w-nav-menu',
        submenu: [
            {
                title: 'Debit card',
                url: 'debit-card',
            },
            {
                title: 'SEPA Bank Account',
                url: 'sepa-bank-account',
            }
        ]
    },
    {
        title: 'Wealth',
        url: '/wealth',
        id: '#wealth',
        className: 'nav_menu-links w-nav-menu',
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
                url: 'savings',
            },
        ]
    }
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
