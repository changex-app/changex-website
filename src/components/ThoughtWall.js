import * as React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { sliderThoughtData } from "./Bank/bankItem";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import $ from 'jquery'

export default function ThoughtWall( {thoughtObj } ) {

    $('#bankCarousel').on('slide.bs.carousel', function (e) {
        console.log('before');
    });

    function PrevClick(e) {
        console.warn('prevClicked', e)
    }

    $(".left").on('click', function(e){
        $("#bankCarousel").carousel("prev", e);
    });

    return (
        <section id="thought-wall">
                <div className="about">
                    <img className={`${thoughtObj.page === 'About' ? 'aboutPage' : 'hide'}`}
                         src={`${thoughtObj.image}`} alt="changex money"/>
                    <img className={`${thoughtObj.page === 'Bank' ? 'bankThought' : 'hide'}`}
                         src={`${thoughtObj.image}`} alt="changex money"/>
                        {thoughtObj.page === "Bank" &&
                        <Carousel
                            className="bankStick"
                            id="bankCarousel"
                            nextLabel=""
                            prevLabel=""
                            prevIcon= {<span data-slide="prev" className="left carouselIcon" onClick={PrevClick}> <FaAngleLeft/> </span>}
                            nextIcon=  {<span data-slide="next" className="right carouselIcon"> <FaAngleRight/> </span>}>
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

                        {thoughtObj.page === "About" &&
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
