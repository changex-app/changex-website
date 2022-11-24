import * as React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export default function CardSlider( {sliderData} ) {
        return (
            <Carousel
                responsive={ responsive }
                swipeable={false}
                draggable={false}
                arrows={false}
                showDots={true}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                centerMode={false}
                focusOnSelect={true}
                swipeable={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
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
}
;
