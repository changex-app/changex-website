import * as React from "react";
import {bankContent, bankItems} from "../Bank/bankItem";
import Perks from "../Perks";

export default function CryptoBank() {
    return (
        <div className="padding-global">
            <div className="container-large">
            <h3 className="heading-style-h3 margin-vertical margin-large">{bankContent.head3}</h3>
                <div className="w-layout-grid grid-3">
                    <Perks perksArray={bankItems} />
                </div>
            </div>
        </div>
    )
}
