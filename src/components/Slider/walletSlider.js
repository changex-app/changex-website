import * as React from "react";
import { useRef, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardMedia from "@mui/material/CardMedia";
import "react-multi-carousel/lib/styles.css";

export default function WalletSlider({
                                         onClickNav,
                                         responsiveSliderData,
                                         sliderData,
                                     }) {
    const carouselRef = useRef();

    const [timer, setTimer] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimer(true);
        }, 1000);
    }, []);

    return (
        <Carousel
            ref={carouselRef}
            additionalTransfrom={responsiveSliderData.additionalTransfrom}
            afterChange={function (previousSlide, _ref) {
                console.warn("ref", _ref, _ref.currentSlide);
                if (_ref.currentSlide < 3) {
                    if (_ref.currentSlide === 2) {
                        onClickNav(0, carouselRef);
                        return;
                    }
                    onClickNav(_ref.currentSlide + 1, carouselRef);
                } else if (_ref.currentSlide >= 5) {
                    onClickNav(0, carouselRef);
                } else if (_ref.currentSlide >= 3) {
                    onClickNav(_ref.currentSlide - 2, carouselRef);
                }
            }}
            autoPlaySpeed={responsiveSliderData.autoPlaySpeed}
            autoPlay={!timer}
            centerMode={responsiveSliderData.centerMode}
            arrows={responsiveSliderData.arrows}
            className={responsiveSliderData.className}
            containerClass={responsiveSliderData.containerClass}
            dotListClass={responsiveSliderData.dotListClass}
            draggable={responsiveSliderData.draggable}
            focusOnSelect={responsiveSliderData.focusOnSelect}
            infinite={responsiveSliderData.infinite}
            itemClass={responsiveSliderData.itemClass}
            keyBoardControl={responsiveSliderData.keyBoardControl}
            minimumTouchDrag={responsiveSliderData.minimumTouchDrag}
            partialVisible={responsiveSliderData.partialVisible}
            pauseOnHover={responsiveSliderData.pauseOnHover}
            renderArrowsWhenDisabled={responsiveSliderData.renderArrowsWhenDisabled}
            renderDotsOutside={responsiveSliderData.renderDotsOutside}
            responsive={responsiveSliderData.responsive}
            rewind={responsiveSliderData.rewind}
            rewindWithAnimation={responsiveSliderData.rewindWithAnimation}
            rtl={responsiveSliderData.rtl}
            renderButtonGroupOutside={responsiveSliderData.renderButtonGroupOutside}
            shouldResetAutoplay={responsiveSliderData.shouldResetAutoplay}
            showDots={responsiveSliderData.showDots}
            sliderClass={responsiveSliderData.sliderClass}
            slidesToSlide={responsiveSliderData.slidesToSlide}
            swipeable={responsiveSliderData.swipeable}
        >
            {sliderData.map((item, index) => {
                return (
                        <CardMedia
                            className="wallet-card-image"
                            component="img"
                            height="400"
                            image={item.url}
                        />
                );
            })}
        </Carousel>
    );
}
