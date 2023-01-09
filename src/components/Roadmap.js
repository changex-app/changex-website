import * as React from "react";
import { Timeline } from 'antd';

export default function Roadmap({ background,  roadmapData }) {
    return (
        <section id="roadmap" className={background}>
            <div className="padding-global">
                <div className="container-large">
                    <div className='margin-bottom-large'>
                        <h5 className="heading-style-h7 is-lime">
                            {roadmapData.head2}
                        </h5>
                        <h3 className="heading-style-h3 margin-bottom-large white">
                            {roadmapData.head}
                        </h3>
                    </div>
                    <Timeline mode="alternate">
                                    {roadmapData.data.map((step, index) => {
                                        return (
                                            <Timeline.Item color={'#8366F4'} label={step.date}  className="roadmap-timeline">
                                                <div id={index.toString()} className="background-color-off-green roadmap-item">
                                                    <div>
                                                        {step.goals.map((goal,index)=> {
                                                            return (
                                                                <p  className="roadmap-text" id={index.toString()}>{goal}</p>
                                                            )
                                                        })}
                                                    </div>
                                                    <div className={`${step.dates.length > 0 ? '' : 'hide'}`}>
                                                        {step.dates.map((date,index)=> {
                                                            return (
                                                                <div id={index.toString()} className="roadmap-date">
                                                                    <h6 className="heading-style-h6">
                                                                        {date.date}
                                                                    </h6>
                                                                    {date.text.map((t, index)=> {
                                                                        return (
                                                                            <p className="roadmap-text" id={index.toString()}>{t}</p>
                                                                        )
                                                                    })}
                                                                </div>
                                                            )
                                                        })}
                                                    </div>

                                                </div>
                                            </Timeline.Item>
                                        )})}
                    </Timeline>
                </div>
            </div>
        </section>
    )
}
