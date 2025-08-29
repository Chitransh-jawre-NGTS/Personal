import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // 👈 Required
import AmazonStyleNavbar from "../components/Navbar"; 
import SmallNavbar from "../components/SmallNavbar"; 
import { Heart, ShoppingBag } from "lucide-react";

const categories = [
  { id: 1, name: "Bridal Wear", image: "https://picsum.photos/200/200?random=21" },
  { id: 2, name: "Designer Sarees", image: "https://picsum.photos/200/200?random=22" },
  { id: 3, name: "Wedding Gowns", image: "https://picsum.photos/200/200?random=23" },
  { id: 4, name: "Jewelry Sets", image: "https://picsum.photos/200/200?random=24" },
  { id: 5, name: "Sherwani", image: "https://picsum.photos/200/200?random=25" },
  { id: 6, name: "Party Wear", image: "https://picsum.photos/200/200?random=26" },
  { id: 7, name: "Jewelry Sets", image: "https://picsum.photos/200/200?random=24" },
  { id: 8, name: "Sherwani", image: "https://picsum.photos/200/200?random=25" },
  { id: 9, name: "Party Wear", image: "https://picsum.photos/200/200?random=26" },
];

const products = [
  {
    id: 1,
    name: "Bridal Lehenga Set",
    price: " ₹12,999",
    tag: "New Arrival",
    image: "https://picsum.photos/500/600?random=1",
  },
  {
    id: 2,
    name: "Designer Saree",
    price: " ₹5,499",
    tag: "Trending",
    image: "https://picsum.photos/500/600?random=2",
  },
  {
    id: 3,
    name: "Wedding Gown",
    price: "₹18,999",
    tag: "Luxury",
    image: "https://picsum.photos/500/600?random=3",
  },
  {
    id: 4,
    name: "Bridal Jewelry Set",
    price: "₹3,999",
    tag: "Hot Pick",
    image: "https://picsum.photos/500/600?random=4",
  },
];

const FashionCategoryPage = () => {
  const categorySettings = {
    dots: true, // 👈 enable dots
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // 3s like Flipkart
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    customPaging: (i) => (
      <div className="w-3 h-3 mx-1 rounded-full bg-gray-300 relative overflow-hidden">
        <div className="progress-dot absolute top-0 left-0 h-full bg-yellow-500"></div>
      </div>
    ),
    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b ">
      {/* Category Carousel */}
      <div className="max-w-full mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Shop by Categories</h2>
        <Slider {...categorySettings}>
          {categories.map((cat) => (
            <div key={cat.id} className="px-2">
              <div className="group cursor-pointer bg-yellow-50 rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-28 h-28 object-cover rounded-full border-4 border-yellow-200 group-hover:border-yellow-400 transition"
                />
                <p className="mt-3 font-medium text-gray-700 group-hover:text-yellow-600 transition">
                  {cat.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Products Grid */}
      <div className="max-w-fulll mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group rounded-3xl overflow-hidden shadow-lg bg-white/70 backdrop-blur-md hover:shadow-2xl transition"
            >
              {/* Badge */}
              <span className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {product.tag}
              </span>

              {/* Product Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-42 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-yellow-600 transition">
                  {product.name}
                </h3>
                <p className="text-yellow-600 font-bold text-lg mt-1">Starting from {product.price}</p>
              </div>

              {/* Hover Actions */}
              {/* <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                <button className="p-2 bg-white rounded-full shadow hover:bg-yellow-100">
                  <Heart className="w-5 h-5 text-yellow-600" />
                </button>
                <button className="p-2 bg-white rounded-full shadow hover:bg-yellow-100">
                  <ShoppingBag className="w-5 h-5 text-yellow-600" />
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FashionCategoryPage;
