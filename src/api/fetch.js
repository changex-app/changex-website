import * as React from 'react'

export const fetchData = async () => {
    const promise = await fetch("https://changex-price-fetcher-xcl5j.ondigitalocean.app/coins/markets?ids=changex&vs_currency=usd");
    const data = await promise.json();

    const promiseAPY = await fetch("https://hydra-dex-backend.changex.io/api/staking/apy?amount=1");
    const dataAPY = await promiseAPY.json();

    return {
        price: data[0],
        apy: dataAPY
    }
}
