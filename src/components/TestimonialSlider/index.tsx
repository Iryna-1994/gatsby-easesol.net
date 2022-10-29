import React, { useState } from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./styles.css"
import TestimonialCard from "./testimonial-card"
import TestimonialIcon from "../../images/testimonial/testimonial.svg"

const TestimonialSlider = () => {
  const [count, setCount] = useState(
    {
      slides: [
        {
          img: TestimonialIcon,
          review: `"Easesol's extensive documentation and github repositories makes it easy to learn how to best take advantage of the platform and follow their product road map."`,
          name: "Chris H",
          position: <div><p>documentation, open source</p><p>Co-founder, Unknown</p></div>,

          
        },
        {
          img: TestimonialIcon,
          review: `"Easesol's extensive documentation and github repositories makes it easy to learn how to best take advantage of the platform and follow their product road map."`,
          name: "Chris H",
          position: <div><p>documentation, open source</p><p>Co-founder, Unknown</p></div>,
        },
        {
          img: TestimonialIcon,
          review: `"Easesol's extensive documentation and github repositories makes it easy to learn how to best take advantage of the platform and follow their product road map."`,
          name: "Chris H",
          position: <div><p>documentation, open source</p><p>Co-founder, Unknown</p></div>,
        },
        {
          img: TestimonialIcon,
          review: `"Easesol's extensive documentation and github repositories makes it easy to learn how to best take advantage of the platform and follow their product road map."`,
          name: "Chris H",
          position: <div><p>documentation, open source</p><p>Co-founder, Unknown</p></div>,
        }
      ]
    }
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <>
      <Slider {...settings}>
        {count.slides.map((slide: any, index: number) => {
          return (
            <div key={index}>
              <TestimonialCard
                cardIcon={slide.img} 
                clientReview={slide.review}
                clientName={slide.name}
                clientPosition={slide.position}
              />
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default TestimonialSlider;
