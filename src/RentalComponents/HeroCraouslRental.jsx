"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // or any icon library

const slides = [
  {
    id: 1,
    image: "src/assets/images/banner/img1.png",
    alt: "Affordable Flats for Rent",
  },
  {
    id: 2,
    image: "src/assets/images/banner/img2.png",
    alt: "Commercial Properties Available",
  },
  {
    id: 3,
    image: "src/assets/images/banner/img3.png",
    alt: "Find Your Ideal Rental Space",
  },
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 p-2 rounded-full z-10 cursor-pointer"
  >
    <ChevronRight className="text-white w-6 h-6" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 p-2 rounded-full z-10 cursor-pointer"
  >
    <ChevronLeft className="text-white w-6 h-6" />
  </div>
);

const HeroCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div className="flex justify-center mt-4">
        <ul className="flex gap-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-400 rounded-full hover:bg-gray-700 transition-all duration-300" />
    ),
  };

  return (
    <div className="relative w-full h-[400px] mt-30 md:h-[500px] overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map(slide => (
          <div key={slide.id}>
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
