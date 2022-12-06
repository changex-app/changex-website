import * as React from "react";
import backgroundAboutImage from "../../static/images/about/thought-catalog.png";
import backgroundBankImage from "../../static/images/about/thought-catalog.png";
import Carousel from 'react-bootstrap/Carousel';
import { sliderThoughtData } from "./Bank/bankItem";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

export default function ThoughtWall( {thoughtObj } ) {
    return (
        <section id="thought-wall">
            {thoughtObj.page === "about" &&
                <div className="about">
                    <img  src={backgroundAboutImage} alt="changex money"/>
                    <div className="aboutStick">
                        <span >
                            {thoughtObj.p1}
                            <span className="is-link"> Change starts now. </span>
                        </span>
                        <span>
                            {thoughtObj.p2}
                        </span>
                    </div>
                </div>
            }
            {thoughtObj.page === "bank" &&
                <div className="bank">
                    <img src={backgroundBankImage} alt="changex bank"/>
                    <div className="bankStick">
                        <Carousel
                            nextLabel=""
                            prevLabel=""
                            prevIcon= {<span className="carouselIcon"> <FaAngleLeft/> </span>}
                            nextIcon=  {<span className="carouselIcon"> <FaAngleRight/> </span>}  >
                            {sliderThoughtData.map((item, index) => {
                                return (
                                    <Carousel.Item className="w-100">
                                        <div className="slider-header" >
                                            <h3>{item.head}</h3>
                                        </div>
                                       <div className="slider-content" >
                                            <p>
                                            {item.p1}
                                            </p>
                                       </div>
                                        <div className="slider-content">
                                            <p>
                                            {item.p2}
                                            </p>
                                        </div>


                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </div>
                </div>
            }
        </section>
    )
}
