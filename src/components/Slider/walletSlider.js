import * as React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "react-multi-carousel/lib/styles.css";
import { SliderButtonGroup } from "./sliderButtonsGroup";

export default function WalletSlider( {onClickNav, responsiveSliderData, sliderData } ) {
    return (
        <Carousel
            additionalTransfrom= { responsiveSliderData.additionalTransfrom }
            afterChange={function(previousSlide,_ref){
                if(_ref.currentSlide < 3) {
                    if(_ref.currentSlide === 2) {
                        onClickNav(0);
                        return;
                    }
                    onClickNav(_ref.currentSlide + 1)
                } else if (_ref.currentSlide >= 5) {
                        onClickNav(0)
                }
                else if(_ref.currentSlide >= 3 ) {
                        onClickNav(_ref.currentSlide - 2)
                }
            }}
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
                    items: 1,
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
                    items: 1,
                    partialVisibilityGutter: 30
                }
            }}
            rewind= { responsiveSliderData.rewind}
            rewindWithAnimation= { responsiveSliderData.rewindWithAnimation }
            rtl= { responsiveSliderData.rtl }
            customButtonGroup= { <SliderButtonGroup/> }
            renderButtonGroupOutside = { responsiveSliderData.renderButtonGroupOutside }
            shouldResetAutoplay= { responsiveSliderData.shouldResetAutoplay }
            showDots= { responsiveSliderData.showDots }
            sliderClass= { responsiveSliderData.sliderClass }
            slidesToSlide= { responsiveSliderData.slidesToSlide }
            swipeable= { responsiveSliderData.swipeable }
        >
            {sliderData.map((item, index)=> {
                return(

                    <Card className="wallet-card" id={index.toString()}>
                        <CardMedia
                            component="img"
                            height="400"
                            image={item.url}
                        />
                    </Card>
                )}
            )}
        </Carousel>
    )
};