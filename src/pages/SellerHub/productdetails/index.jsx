import React, { useState } from "react";
import SmallNavbar from "../../../components/SmallNavbar";
// import AmazonStyleNavbar from "../../../components/Navbar";
import { Star, Truck, ShieldCheck, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showHighlights, setShowHighlights] = useState(true);
  const [showDescription, setShowDescription] = useState(true);

  const [reviews] = useState([
    {
      rating: 5,
      title: "Amazing product!",
      text: "The display is crystal clear and the battery lasts easily for a week. Worth the price!",
      user: "Rahul Sharma",
      date: "2 days ago",
      verified: true,
      images: ["https://picsum.photos/id/237/100/100"],
    },
    {
      rating: 4,
      title: "Good but can improve",
      text: "Overall nice watch, but Bluetooth calling drains battery faster.",
      user: "Priya Verma",
      date: "1 week ago",
      verified: true,
      images: [],
    },
  ]);

  const product = {
    title: "Noise Smartwatch with AMOLED Display",
    brand: "Noise",
    rating: 4.3,
    reviews: 1523,
    price: 2999,
    originalPrice: 5999,
    discount: "50% Off",
    description:
      "This Noise smartwatch comes with an AMOLED display, heart rate monitoring, multiple sports modes, long-lasting battery, and Bluetooth calling features.",
    highlights: [
      "1.78 inch AMOLED Display",
      "Bluetooth Calling",
      "Heart Rate & SpO2 Monitoring",
      "7-day Battery Life",
      "100+ Sports Modes",
    ],
    images: [
      "https://picsum.photos/id/1011/500/600",
      "https://picsum.photos/id/1012/500/600",
      "https://picsum.photos/id/1013/500/600",
      "https://picsum.photos/id/1014/500/600",
      "https://picsum.photos/id/1015/500/600",
    ],
  };

  return (
    <>
      {/* <AmazonStyleNavbar /> */}
      <SmallNavbar showBottomNav={false} />
      <div className="bg-gray-100 min-h-screen lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-md p-4 md:p-6">
          {/* Left Section (Images) */}
          <div className="flex flex-col items-center">
            <img
              src={product.images[selectedImage]}
              alt="Product"
              className="w-full h-60 lg:h-auto max-w-sm md:max-w-md rounded-lg shadow-md object-cover"
            />
            <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className={`w-16 h-20 object-cover rounded-lg border-2 cursor-pointer transition ${selectedImage === index
                      ? "border-blue-600 scale-105"
                      : "border-gray-300 hover:border-blue-400"
                    }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h1 className="text-xl md:text-2xl font-semibold mb-1">
              {product.title}
            </h1>
            <p className="text-gray-500 mb-2 text-sm">Brand: {product.brand}</p>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 bg-green-600 text-white text-sm rounded">
                {product.rating} ★
              </span>
              <span className="text-gray-600 text-sm">
                {product.reviews} Ratings & Reviews
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-2xl md:text-3xl font-bold text-gray-800">
                ₹{product.price}
              </span>
              <span className="line-through text-gray-500 text-sm md:text-base">
                ₹{product.originalPrice}
              </span>
              <span className="text-green-600 font-semibold text-sm">
                {product.discount}
              </span>
            </div>

            {/* Delivery & Warranty */}
            <div className="space-y-2 text-sm mb-6">
              <p className="flex items-center gap-2">
                <Truck size={16} className="text-blue-600" /> Free Delivery in 3-5 days
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-green-600" /> 1 Year Warranty
              </p>
              <p className="flex items-center gap-2">
                <CreditCard size={16} className="text-orange-600" /> Secure Payment Options
              </p>
            </div>

            {/* Highlights Collapsible */}
            <div className="mb-4 border-b pb-2">
              <button
                onClick={() => setShowHighlights(!showHighlights)}
                className="w-full flex justify-between items-center font-semibold text-gray-800"
              >
                Highlights <span>{showHighlights ? "▲" : "▼"}</span>
              </button>
              {showHighlights && (
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
                  {product.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Description Collapsible */}
            <div className="mb-6 border-b pb-2">
              <button
                onClick={() => setShowDescription(!showDescription)}
                className="w-full flex justify-between items-center font-semibold text-gray-800"
              >
                Description <span>{showDescription ? "▲" : "▼"}</span>
              </button>
              {showDescription && (
                <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                  {product.description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Ratings & Reviews */}
        <div className="bg-white mt-6 rounded-lg  p-4 md:p-6">
          <h2 className="text-lg font-semibold mb-4">Ratings & Reviews</h2>

          {/* Ratings Summary */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            {/* Left side - Average Rating */}
            <div className="flex flex-col items-center justify-center md:w-1/3">
              <h1 className="text-4xl font-bold text-green-600">4.2★</h1>
              <p className="text-gray-600 text-sm">23,456 Ratings & 2,345 Reviews</p>
            </div>

            {/* Right side - Bar Breakdown */}
            <div className="flex-1">
              {[5, 4, 3, 2, 1].map((star) => {
                const percentage =
                  star === 5
                    ? 60
                    : star === 4
                      ? 20
                      : star === 3
                        ? 10
                        : star === 2
                          ? 5
                          : 5; // fake data, replace with real %
                return (
                  <div key={star} className="flex items-center gap-2 mb-2">
                    <span className="text-sm w-6">{star}★</span>
                    <div className="w-full bg-gray-200 rounded h-2">
                      <div
                        className="bg-green-600 h-2 rounded"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600">{percentage}%</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Individual Reviews */}
          {reviews.map((rev, i) => (
            <div key={i} className="border-b pb-4 mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-green-600 text-white text-xs rounded">
                  {rev.rating} ★
                </span>
                <span className="font-semibold">{rev.title}</span>
                {rev.verified && (
                  <span className="text-green-600 text-xs ml-2">✔ Verified</span>
                )}
              </div>
              <p className="text-gray-700 text-sm mb-2">{rev.text}</p>
              {rev.images.length > 0 && (
                <div className="flex gap-2 mb-2">
                  {rev.images.map((img, j) => (
                    <img
                      key={j}
                      src={img}
                      alt="Review"
                      className="w-16 h-16 object-cover rounded border"
                    />
                  ))}
                </div>
              )}
              <p className="text-gray-500 text-xs">
                {rev.user} · {rev.date}
              </p>
            </div>
          ))}
        </div>


        {/* Sticky Mobile Bottom Bar */}
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-300 p-3 flex gap-3 md:hidden">
          <button className="w-1/2 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow">
            Add to Cart
          </button>
          <Link to={"/checkout"} className="w-1/2 px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg shadow">
            Buy Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
