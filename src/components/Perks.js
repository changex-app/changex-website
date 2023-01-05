import * as React from "react";

export default function Perks( { perksArray } ) {
    return (
        <>
            {perksArray.map((item,index) => {
                return(
                    <div id={index.toString()} className="box-container-bank">
                        <div className="padding-medium">
                            <div className="icon-wrapper icon-card margin-bottom margin-large">
                                <img src={item.src} loading="lazy" alt={item.title} className="icon" />
                            </div>
                            <h4 className="heading-style-h5 card-title margin-top margin-large">
                                <strong>{item.title}</strong>
                            </h4>
                            <p className="text-color-darkgrey card-text">{item.text}</p>
                        </div>
                    </div>
                )})
            }
        </>
    )
}
