"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: false,
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="relative w-full h-[280px] mt-30 sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden">
      {/* Custom Arrows */}
      <div
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white hover:text-black backdrop-blur-md p-2 rounded-full shadow-lg cursor-pointer z-1 transition"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      <div
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white hover:text-black backdrop-blur-md p-2 rounded-full shadow-lg cursor-pointer z-1 transition"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Carousel */}
      <Slider ref={sliderRef} {...settings}>
        <div className="w-full h-full">
          <img
            src="src/assets/images/banner/img1.png"
            alt="E-commerce Banner 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full">
          <img
            src="src/assets/images/banner/img2.png"
            alt="E-commerce Banner 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full">
          <img
            src="src/assets/images/banner/img3.png"
            alt="E-commerce Banner 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
