import * as React from 'react'
import axios from "axios";

export const fetchPrice = async () => {
    let dataPrice;
    await axios.get("https://changex-price-fetcher-xcl5j.ondigitalocean.app/coins/markets?ids=changex&vs_currency=usd")
        .then((res)=> {
            if(res.status === 200) {
                dataPrice = res.data[0];
            }
        })
        .catch(err => {
            throw new Error(err);
        });

    return {price: dataPrice}
}

export const fetchApy = async () => {
    let dataApy;

    await axios.get("https://hydra-dex-backend.changex.io/api/staking/apy?amount=1")
        .then((res)=> {
            if(res.status === 200) {
                dataApy = res.data;
            }
        })
        .catch(err => {
            throw new Error(err);
        });

    return {apy: dataApy}
}
