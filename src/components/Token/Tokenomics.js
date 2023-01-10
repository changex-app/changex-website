import * as React from 'react';
import { Pie } from '@ant-design/plots';
import TokenomicsTable from "./TokenomicsTable";

export default function Tokenomics({ background, tokenData}) {
    const data = tokenData.chart;

    const config = {
        appendPadding: 10,
        data,
        theme: 'dark',
        class: 'pieChartToken',
        fontFamily: 'Lexend',
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        innerRadius: 0.64,
        meta: {
            value: {
                formatter: (v) => `${v}M`,
            },
        },
        label: {
            type: 'inner',
            offset: '0%',
            autoRotate: false,
            style: {
                textAlign: 'center',
                fill: '#fff',
            },
            formatter: ' ',
        },
        statistic: {
            title: {
                offsetY: -4
            },
            content: {
                style: {
                    color: '#fff',
                },
                offsetY: -4,
            },
        },
        pieStyle: {
            lineWidth: 0,
        },
        legend: false
    };
    return (
        <section id="tokenomics" className={background}>
            <div className="padding-global">
                <div className="container-large">
                    <h4 className={`${background === "background-color-black" ? "is-lime" : "blue" } heading-style-h6 margin-vertical margin-large`}>
                        {tokenData.head2}
                    </h4>
                    <h3 className={`${background === "background-color-black" ? "white" : "blue"} heading-style-h3 margin-vertical margin-large`}>
                        {tokenData.head}
                    </h3>
                    <div className="grid-2">
                        <div className="pieChart">
                            <Pie {...config} />
                        </div>
                        <div>
                            <TokenomicsTable />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
