import React, { useState } from "react"
import Slider from "react-slick"
import ProductCard from "./product"

import IconBlack from "../../images/work/slide-icon-black.svg"
import IconWhite from "../../images/work/slide-icon-white.svg"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./styles.css"

const ProductSlider = () => {
  const [count, setCount] = useState(
    {
      slides: [
        {
          imgBlack: IconBlack,
          imgWhite: IconWhite,
          desc: "Building a Comprehensive Digital Experience for an Aircraft Configurator",
          to: "/"
        },
        {
          imgBlack: IconBlack,
          imgWhite: IconWhite,
          desc: "Building a Comprehensive Digital Experience for an Aircraft Configurator",
          to: "/"
        },
        {
          imgBlack: IconBlack,
          imgWhite: IconWhite,
          desc: "Building a Comprehensive Digital Experience for an Aircraft Configurator",
          to: "/"
        },
        {
          imgBlack: IconBlack,
          imgWhite: IconWhite,
          desc: "Building a Comprehensive Digital Experience for an Aircraft Configurator",
          to: "/"
        },
        {
          imgBlack: IconBlack,
          imgWhite: IconWhite,
          desc: "Building a Comprehensive Digital Experience for an Aircraft Configurator",
          to: "/"
        },
        {
          imgBlack: IconBlack,
          imgWhite: IconWhite,
          desc: "Building a Comprehensive Digital Experience for an Aircraft Configurator",
          to: "/"
        },
        {
          imgBlack: IconBlack,
          imgWhite: IconWhite,
          desc: "Building a Comprehensive Digital Experience for an Aircraft Configurator",
          to: "/"
        },
        {
          imgBlack: IconBlack,
          imgWhite: IconWhite,
          desc: "Building a Comprehensive Digital Experience for an Aircraft Configurator",
          to: "/"
        },
        {
          imgBlack: IconBlack,
          imgWhite: IconWhite,
          desc: "Building a Comprehensive Digital Experience for an Aircraft Configurator",
          to: "/"
        },
        {
          imgBlack: IconBlack,
          imgWhite: IconWhite,
          desc: "Building a Comprehensive Digital Experience for an Aircraft Configurator",
          to: "/"
        },
        {
          imgBlack: IconBlack,
          imgWhite: IconWhite,
          desc: "Building a Comprehensive Digital Experience for an Aircraft Configurator",
          to: "/"
        },
        {
          imgBlack: IconBlack,
          imgWhite: IconWhite,
          desc: "Building a Comprehensive Digital Experience for an Aircraft Configurator",
          to: "/"
        }
      ]
    }
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section>
      <div className="container mx-auto mt-24">
        <Slider {...settings}>
          {count.slides.map((slide: any, index: number) => {
            return (
              <div key={index}>
                <ProductCard imgBlackSrc={slide.imgBlack} imgWhiteSrc={slide.imgWhite} cardDesc={slide.desc} to={slide.to} />
                {/* <img src={slide.img} alt={`slide${index}`} /> */}
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default ProductSlider;
