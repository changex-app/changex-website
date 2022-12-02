import * as React from "react"

export default function Advantages( { advantages } ) {
    return (
        <div className="card-grid">
            <h3 className="heading-style-h3 margin-vertical margin-large">
                More Than A card - It’s Freedom
            </h3>
            <div className="w-layout-grid grid-4">
                {advantages.map((card, index)=> {
                    return (
                        <div id={index.toString()} className="box-container">
                            <div className="card-icon padding-medium">
                                <div className="icon-wrapper margin-bottom margin-medium">
                                    <img src={card.src} loading="lazy" alt="" width={card.width} className="card-svg"></img>
                                </div>
                                <title className="heading-style-h3">{card.title}</title>
                                <p style={{fontSize: "15px"}} className="card-text margin-top margin-large">{card.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
