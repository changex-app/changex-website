import * as React from 'react'
import { useEffect, useRef, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Button, CardActions} from "@mui/material";
import { FaAngleRight } from "react-icons/fa";

export default function CardSlider( { onClickNav, responsiveSliderData, sliderData } ) {

    const carouselRef = useRef();

    const [timer, setTimer] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setTimer(true)
        }, 1000)
    }, [])

        return (
            <Carousel
                ref={carouselRef}
                additionalTransfrom= { responsiveSliderData.additionalTransfrom }
                afterChange={function(previousSlide,_ref){
                    onClickNav(_ref.currentSlide, carouselRef)
                }}
                autoPlaySpeed= { responsiveSliderData.autoPlaySpeed }
                autoPlay={!timer}
                centerMode= { responsiveSliderData.centerMode }
                arrows= { responsiveSliderData.arrows }
                className= { responsiveSliderData.className }
                containerClass= { responsiveSliderData.containerClass }
                dotListClass= { responsiveSliderData.dotListClass }
                draggable={ responsiveSliderData.draggable}
                focusOnSelect={ responsiveSliderData.focusOnSelect }
                infinite= { responsiveSliderData.infinite }
                itemClass= { responsiveSliderData.itemClass }
                keyBoardControl= { responsiveSliderData.keyBoardControl }
                minimumTouchDrag= { responsiveSliderData.minimumTouchDrag }
                partialVisible= { responsiveSliderData.partialVisible }
                pauseOnHover= { responsiveSliderData.pauseOnHover}
                renderArrowsWhenDisabled= { responsiveSliderData.renderArrowsWhenDisabled }
                renderDotsOutside= { responsiveSliderData.renderDotsOutside }
                responsive={responsiveSliderData.responsive}
                rewind= { responsiveSliderData.rewind}
                rewindWithAnimation= { responsiveSliderData.rewindWithAnimation }
                rtl= { responsiveSliderData.rtl }
                customButtonGroup= { responsiveSliderData.customButtonGroup }
                renderButtonGroupOutside = { responsiveSliderData.renderButtonGroupOutside }
                shouldResetAutoplay= { responsiveSliderData.shouldResetAutoplay }
                showDots= { responsiveSliderData.showDots }
                sliderClass= { responsiveSliderData.sliderClass }
                slidesToSlide= { responsiveSliderData.slidesToSlide }
                swipeable= { responsiveSliderData.swipeable }
            >
                { sliderData.map((item, index)=> {
                                return (
                                    <Card className="card-slide" id={index.toString()}
                                          sx={{maxWidth: 345, margin: "30px 30px"}}>
                                         <CardMedia
                                            component="img"
                                            height="200"
                                            width="200"
                                            image={item.image}
                                            alt={item.alt}
                                        />
                                        <CardContent className="card-content">
                                            {item.head &&
                                                <Typography className="card-header" gutterBottom variant="h5" component="div">
                                                    {item.head}
                                                </Typography>
                                            }
                                            <Typography className="card-caption" variant="body2" color="text.secondary">
                                                {item.text}
                                            </Typography>
                                            <CardActions>
                                                {item.url &&
                                                    <Button size="small" color="primary">
                                                        <a className="card-link" href={item.url}>{item.linkText} <FaAngleRight/></a>
                                                    </Button>
                                                }
                                            </CardActions>
                                        </CardContent>
                                    </Card>
                                )
                            }
                        )}
            </Carousel>
        )
};
