"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Import images
import img1 from "../assets/images/banner/img1.png";
import img2 from "../assets/images/banner/img2.png";
import img3 from "../assets/images/banner/img3.png";

const HeroCarousel = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
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
    <div className="relative w-full h-[180px] lg:mt-30 sm:h-[150px] md:h-[200px] lg:h-[450px] overflow-hidden">
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
        {[img1, img2, img3].map((image, index) => (
          <div className="w-full h-full" key={index}>
            <img
              src={image}
              alt={`E-commerce Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
