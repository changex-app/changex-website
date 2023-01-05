import * as React from "react";

export default function Quote( { quoteObject } ) {
    return (
        <>
            <div className="margin-top-medium quote">
                <div className="padding-small quoteImage">
                    <img src={quoteObject.img} />
                </div>
                <div className="quoteText">
                    <h5 className="heading-style-h5 padding-small">
                        {quoteObject.quote}
                    </h5>
                    <p className="">
                        <strong>{quoteObject.author}</strong>, {quoteObject.role}
                    </p>
                </div>
            </div>
        </>
    )
}
