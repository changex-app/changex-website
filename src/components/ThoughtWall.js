import * as React from "react";
import backgroundAboutImage from "../../static/images/about/thought-catalog.png";
import backgroundBankImage from "../../static/images/bank/thought-catalog-bank.png";
import Carousel from 'react-bootstrap/Carousel';
import { sliderThoughtData } from "./Bank/bankItem";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

export default function ThoughtWall( {thoughtObj } ) {
    return (
        <section id="thought-wall">
                <div className="about">
                    <img className="aboutImage"  src={backgroundAboutImage} alt="changex money"/>
                        {thoughtObj.page === "bank" &&
                        <Carousel
                            className="bankStick"
                            nextLabel=""
                            prevLabel=""
                            prevIcon= {<span className="carouselIcon"> <FaAngleLeft/> </span>}
                            nextIcon=  {<span className="carouselIcon"> <FaAngleRight/> </span>}  >
                            {sliderThoughtData.map((item, index) => {
                                return (
                                    <Carousel.Item className="w-100">
                                        <div className="slider-header" >
                                            <h4>{item.head}</h4>
                                        </div>
                                        <div className="slider-content" >
                                            <p className="heading-style-h7">
                                                {item.p1}
                                            </p>
                                        </div>
                                        <div className="slider-content">
                                            <p className="heading-style-h7">
                                                {item.p2}
                                            </p>
                                        </div>


                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                        }

                        {thoughtObj.page === "about" &&
                            <div className="aboutStick">
                            <span >
                            {thoughtObj.p1}
                                <span className="is-link"> Change starts now. </span>
                        </span>
                                <span>
                            {thoughtObj.p2}
                        </span>
                            </div>
                        }
                </div>
        </section>
    )
}
