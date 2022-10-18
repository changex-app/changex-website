import * as React from 'react'
import axios from "axios";

export const fetchData = async () => {
    let dataPrice;
    let dataAPY;

    await axios("https://changex-price-fetcher-xcl5j.ondigitalocean.app/coins/markets?ids=changex&vs_currency=usd")
        .then((res)=> {
            if(res.status === 200) {
                dataPrice = res.data[0];
            }
        })
        .catch(err => {
            throw new Error('Error fetching data', err);
        });

    await axios("https://hydra-dex-backend.changex.io/api/staking/apy?amount=1")
        .then((res)=> {
            if(res.status === 200) {
                dataAPY = res.data;
            }
        })
        .catch(err => {
            throw new Error('Error fetching data', err);
        });

    return {
        price: dataPrice,
        apy: dataAPY
    }

}
