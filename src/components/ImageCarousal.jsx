import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const imageCount = 12;
const imageUrls = Array.from({ length: imageCount }, (_, i) =>
  `https://picsum.photos/seed/carousel-${i}/60/60`
);

export default function InfiniteImageCarousel() {
  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
  
     <div className=" container  mx-auto  rounded-2xl p-20 overflow-hidden">
      <Slider {...settings}>
        {imageUrls.map((src, index) => (
          <div key={index} className="!px-0">
            <img
              src={src}
              alt={`carousel-${index}`}
              className="w-[86px] h-[86px] rounded-xl object-cover border border-white mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>


     <div className="flex container mx-auto flex-col lg:flex-row items-center justify-center bg-gray-100 py-10 px-4 lg:px-20">
      {/* Image Section */}
      <div className="w-full lg:w-3/5 overflow-hidden rounded-l-xl">
        <img
          src="https://maraviyainfotech.com/projects/mantu-html/assets/img/banner/1.jpg"
          alt="Fashion Banner"
          className="w-full h-full object-cover rounded-xl lg:rounded-r-none"
        />
      </div>

      {/* Text Section */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-2/5 bg-white rounded-r-xl p-6 md:p-10"
      >
        <h3 className="text-md font-semibold text-gray-700 uppercase mb-2">
          Women's
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 leading-tight mb-4">
          Fashion Collection
        </h2>
        <p className="text-gray-700 font-semibold text-lg mb-1">Summer</p>
        <p className="text-gray-500 mb-6">
          New Stylish Shirts, Pants & Accessories.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-md transition">
          Book Now
        </button>
      </motion.div>
    </div>
    </>
  );
}
