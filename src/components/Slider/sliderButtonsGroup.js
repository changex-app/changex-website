import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import * as React from "react";

export const SliderButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
        carouselState: { currentSlide },
    } = rest;

    return (
        <div
            className="carousel-button-group-wallet mb-4  gap-4 flex justify-end
          items-center w-full"
        >
            <button onClick={() => previous()} className="button-arrows">
                <BiChevronLeft />
            </button>
            <button onClick={() => next()} className="button-arrows">
                <BiChevronRight />
            </button>
        </div>
    );
};
