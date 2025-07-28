import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { id: 1, name: "Sarees", image: "https://5.imimg.com/data5/ANDROID/Default/2020/12/CN/XR/ER/120295808/img-20201223-205457-346-jpg-500x500.jpg" },
  { id: 2, name: "Lehengas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt9bYtpHun_OJb3rxLdlsBnhCsa1o3E0klMPxhxeuRIA&s" },
  { id: 3, name: "Gowns", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcC_WGdBSXuHmt0rsgp8oxaRsJ6srp4-ujUg&s" },
  { id: 4, name: "Sherwanis", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToALZ2NyHlqKak6QWHVmgqH38bysyfA1Xg5w&s" },
  { id: 5, name: "Shoes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5kB1bb5wA_Lwh7mdhy-DPiWtoNj3sG_ZQQ&s" },
  { id: 6, name: "Mens Kurta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwhs7HGi2eACHPD3HGfLAHltQBpl5t2FoPw&s" },
];

const CategorySection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto px-4 py-14 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <h2 className="text-4xl md:text-5xl font-extrabold p-4 text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wide  drop-shadow-lg">
        💫 Explore Our Stunning Categories 💫
      </h2>

      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className="p-2">
            <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 bg-white/70 backdrop-blur-md">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-3 left-3 text-white text-lg font-bold drop-shadow-xl group-hover:bottom-5 transition-all duration-300">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySection;
