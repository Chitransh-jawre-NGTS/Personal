import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FullWidthCarousel = () => {
  const images = [
    "https://picsum.photos/1600/200?random=1",
    "https://picsum.photos/1600/200?random=2",
    "https://picsum.photos/1600/200?random=3",
    "https://picsum.photos/1600/200?random=4",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full h-[300px] overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-[300px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FullWidthCarousel;
