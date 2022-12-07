import * as React from "react"

export default function Advantages( { classGrid, title, advantages } ) {
    return (
        <div className={classGrid}>
            <h3 className="heading-style-h3 text-align-center margin-vertical margin-large">
                {title}
            </h3>
            <div className="w-layout-grid grid-4">
                {advantages.map((card, index)=> {
                    return (
                        <div id={index.toString()} className="box-container">
                            <div className="card-icon padding-medium">
                                <div className="icon-wrapper margin-bottom margin-medium">
                                    <img src={card.src} loading="lazy" alt="" width={card.width} className="card-svg"></img>

                                </div>
                                <h6 className="heading-style-h6">{card.title}</h6>
                                <p style={{fontSize: "15px"}} className="card-text margin-top margin-large">{card.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
