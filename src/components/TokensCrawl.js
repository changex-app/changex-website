import * as React from 'react';

export default function TokensCrawl({ }) {
    let crawlData = [];

    https://changex-price-fetcher-xcl5j.ondigitalocean.app/coins/markets?ids=bitcoin%2Cchangex&vs_currency=usd

    return (
        <section
            id="infinit-craw">
            <div
                className="padding padding-global">
                <div
                    className="container-large">
                    <div>
                        {crawlData.map((item)=> {
                            return(
                                    <div style={{border: "1px solid blue", borderRadius: "1rem", display: "flex"}}>
                                        <h6 className="heading-style-h6">Price:</h6>
                                        <span>{item.current_price}$</span>
                                        <span className="blue">{item.price_change_percentage_24h}%</span>
                                        <img
                                            src={item.src}
                                            loading="lazy"
                                            width="75"
                                            alt={item.symbol}
                                            className="">
                                        </img>
                                        {item.symbol.toUpperCase()}
                                    </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </section>
    )
}
