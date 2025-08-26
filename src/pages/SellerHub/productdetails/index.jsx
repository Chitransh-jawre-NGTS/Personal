import React, { useState } from "react";
import SmallNavbar from "../../../components/SmallNavbar";
import AmazonStyleNavbar from "../../../components/Navbar";

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [reviews, setReviews] = useState([
    {
      rating: 5,
      title: "Amazing product!",
      text: "The display is crystal clear and the battery lasts easily for a week. Worth the price!",
      user: "Rahul Sharma",
      date: "2 days ago",
      images: ["https://picsum.photos/id/237/100/100"],
    },
    {
      rating: 4,
      title: "Good but can improve",
      text: "Overall nice watch, but Bluetooth calling drains battery faster.",
      user: "Priya Verma",
      date: "1 week ago",
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
   {/* <AmazonStyleNavbar/> */}
   <SmallNavbar/> 
    <div className="bg-gray-100 min-h-screen py-6 px-3 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-md p-6">
        {/* Left Section (Images) */}
        <div className="flex flex-col items-center">
          {/* Main Image */}
          <img
            src={product.images[selectedImage]}
            alt="Product"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-md object-contain"
          />

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`w-20 h-24 object-cover rounded-lg border-2 cursor-pointer transition ${
                  selectedImage === index
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
          {/* Product Info */}
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">{product.title}</h1>
          <p className="text-gray-500 mb-2 text-sm md:text-base">Brand: {product.brand}</p>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-1 bg-green-600 text-white text-sm rounded">
              {product.rating} ★
            </span>
            <span className="text-gray-600 text-sm">
              {product.reviews} Ratings & Reviews
            </span>
          </div>

          {/* Price Section */}
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-3xl font-bold text-gray-800">
              ₹{product.price}
            </span>
            <span className="line-through text-gray-500">₹{product.originalPrice}</span>
            <span className="text-green-600 font-semibold">{product.discount}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="w-full sm:w-auto px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition">
              Add to Cart
            </button>
            <button className="w-full sm:w-auto px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg shadow hover:bg-orange-700 transition">
              Buy Now
            </button>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Highlights</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm md:text-base">
              {product.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* Ratings & Reviews Section */}
      <div className="bg-white mt-8 rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Ratings & Reviews</h2>

        {/* Customer Images Gallery */}
        {reviews.some((r) => r.images.length > 0) && (
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Customer Images</h3>
            <div className="flex gap-2 flex-wrap">
              {reviews.flatMap((r) => r.images).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Customer"
                  className="w-20 h-20 object-cover rounded border"
                />
              ))}
            </div>
          </div>
        )}

        {/* Reviews */}
        <div className="space-y-6">
          {reviews.map((rev, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-green-600 text-white text-xs rounded">
                  {rev.rating} ★
                </span>
                <span className="font-semibold">{rev.title}</span>
              </div>
              <p className="text-gray-700 text-sm mb-2">{rev.text}</p>

              {/* Review Images */}
              {rev.images.length > 0 && (
                <div className="flex gap-2 mb-2">
                  {rev.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Review"
                      className="w-20 h-20 object-cover rounded border"
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
      </div>
    </div>
    </>
  );
};

export default ProductDetailPage;
