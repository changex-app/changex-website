import * as React from "react"

export default function Advantages( { classGrid, title, advantages } ) {
    return (
        <div id="advantages">
            <div className="padding-global">
             <div className="container-large">
                <div className="main-container-block">
                    {classGrid === 'card-grid-wallet' &&
                        <h3 className="heading-style-h3 text-align-center margin-vertical margin-large">{title}</h3>}
                    <div className={classGrid}>
                        {classGrid !== 'card-grid-wallet' && <h3 className="heading-style-h3 text-align-center margin-vertical margin-large">
                            {title}
                        </h3>}
                        <div className="w-layout-grid grid-4">
                            {advantages.map((card, index)=> {
                                return (
                                    <div id={index.toString()} className="box-container">
                                        <div className="card-icon ">
                                            <div className="icon-wrapper margin-bottom margin-medium">
                                                <img src={card.src} loading="lazy" alt="" width={card.width} className="card-svg"></img>
                                            </div>
                                            <h5 className="headingTextSize">{card.title}</h5>
                                            <p style={{fontSize: "15px"}} className="card-text margin-top margin-large">{card.text}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
