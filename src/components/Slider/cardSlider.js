import * as React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import "react-multi-carousel/lib/styles.css";
import { BiChevronRight, FiChevronLeft } from "react-icons/all";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 1,
        partialVisibilityGutter: 100// optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 100// optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 100// optional, default to 1.
    }
};

export default function CardSlider( {responsiveSliderData, sliderData} ) {
        return (
            <Carousel
                additionalTransfrom= { responsiveSliderData.additionalTransfrom }
                autoPlaySpeed= { responsiveSliderData.autoPlaySpeed }
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
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 2,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                          },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                         },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
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
                {sliderData.map((item, index)=> {
                    return(

                        <Card className="card-slide" id={index.toString()} sx={{maxWidth: 345, margin: "30px 30px" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={item.image}
                                    alt={item.alt}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.text}
                                    </Typography>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            <a href={item.url}>{item.linkText} <FaAngleRight/></a>
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    )}
                )}
            </Carousel>
        )
};
