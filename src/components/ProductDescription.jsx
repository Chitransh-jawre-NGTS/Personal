// ProductDescription.jsx

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/carts/Cartslice";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Footer from "./Footer";


const reviewsData = {
  averageRating: 4.0,
  totalRatings: 34925,
  totalReviews: 11958,
  ratingBreakdown: {
    excellent: 18377,
    veryGood: 7757,
    good: 3727,
    average: 1512,
    poor: 3552,
  },
  userReviews: [
    {
      user: "Munmun",
      rating: 5,
      date: "24 Dec 2024",
      comment:
        "Nice 👍 kaafi achha anarkali suit h fabric bhi acha h dupatte ki length bhi acchi ha i pant bhi acchi hai All set perfect hai tq 😊 meesha",
      images: [
        "/images/review1.png",
        "/images/review2.png",
        "/images/review3.png",
        "/images/review4.png",
        "/images/review5.png",
      ],
    },
  ],
};


const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
    const [visibleCount, setVisibleCount] = useState(20);
    const dispatch = useDispatch();
    const [isInWishlist, setIsInWishlist] = useState(false);





    const Navigate = useNavigate();
    // Set total products dynamically
    const totalProducts = 50; // you can change this anytime
    const products = Array.from({ length: totalProducts }, (_, i) => ({
      id: (i + 1).toString(), // id as string
      image: `https://picsum.photos/300/300?random=${i + 1}`,
      title: `Product ${i + 1} - Example Product Title`,
      price: 100 + i,
      originalPrice: 150 + i,
      discount: `${Math.floor(Math.random() * 30) + 10}% off`,
      totalRatings: Math.floor(Math.random() * 500),
      usersRated: Math.floor(Math.random() * 200),
    }));
  
    const handleShowMore = () => {
      setVisibleCount((prev) => prev + 20);
    };


    const handleWishlistClick = () => {
      setIsInWishlist(!isInWishlist);
      if (!isInWishlist) {
        toast.success('Item added to wishlist!');
      } else {
        toast.success('Item removed from wishlist!');
      }
    };
  useEffect(() => {
    // Same products array (should ideally move to a separate file later)
    const products = Array.from({ length: 60 }, (_, i) => ({
      id: (i + 1).toString(),
      image: `https://picsum.photos/300/300?random=${i + 1}`,
      title: `Product ${i + 1} - Example Product Title`,
      price: 100 + i,
      originalPrice: 150 + i,
      discount: `${Math.floor(Math.random() * 30) + 10}% off`,
      totalRatings: Math.floor(Math.random() * 500),
      usersRated: Math.floor(Math.random() * 200),
    }));

    const foundProduct = products.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  return (
    <>
 <div className="max-w-7xl mx-auto p-4 md:p-10 bg-white rounded-md shadow-md mt-24">
  <div className="flex flex-col md:flex-row gap-10">
    
    {/* LEFT SIDE */}
    <div className="md:w-1/2 flex flex-col items-center">
      {/* Main Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full max-h-[500px] object-cover rounded-lg"
      />

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 overflow-x-auto">
        {product.thumbnails?.map((thumb, index) => (
          <img
            key={index}
            src={thumb}
            alt={`Thumb ${index}`}
            className="w-20 h-20 object-cover border border-gray-300 rounded-md cursor-pointer"
          />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
        <button className="bg-pink-600 text-white py-2 px-6 rounded hover:bg-pink-700 w-full sm:w-auto">
          Add to Cart
        </button>
        <button className="bg-purple-700 text-white py-2 px-6 rounded hover:bg-purple-800 w-full sm:w-auto">
          Buy Now
        </button>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="md:w-1/2 space-y-4">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800">{product.title}</h1>

      {/* Price & Discount */}
      <div className="flex items-center gap-4 text-xl">
        <span className="text-pink-600 font-bold">₹{product.price}</span>
        <span className="line-through text-gray-500">₹{product.originalPrice}</span>
        <span className="text-green-600 font-semibold">{product.discount} off</span>
      </div>

      {/* Ratings */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
          {product.rating} ★
        </span>
        <span>({product.totalRatings} Ratings, {product.totalReviews} Reviews)</span>
        <span className="text-sm text-green-600 font-medium ml-4">Free Delivery</span>
      </div>

      {/* Size Selection */}
      <div>
        <h3 className="font-semibold mb-1">Select Size</h3>
        <div className="flex flex-wrap gap-3">
          {["S", "M", "L", "XL", "XXL", "XXXL"].map(size => (
            <button key={size} className="border px-4 py-1 rounded-full hover:bg-purple-100">
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div>
        <h3 className="font-semibold mb-1">Product Details</h3>
        <ul className="text-gray-700 list-disc ml-6 space-y-1 text-sm">
          <li>Fabric: {product.fabric}</li>
          <li>Sleeve Length: {product.sleeveLength}</li>
          <li>Pattern: {product.pattern}</li>
          <li>Combo: {product.combo}</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-md shadow-md mt-10">
  <h2 className="text-xl font-semibold mb-4">Product Ratings & Reviews</h2>

  {/* Top Summary Section */}
  <div className="flex flex-col md:flex-row gap-10">
    <div className="flex flex-col items-center md:w-1/4 text-center">
      <span className="text-4xl font-bold text-green-600">{reviewsData.averageRating}★</span>
      <p className="text-sm text-gray-600">
        {reviewsData.totalRatings.toLocaleString()} Ratings,
        <br />
        {reviewsData.totalReviews.toLocaleString()} Reviews
      </p>
    </div>

    {/* Rating Breakdown */}
    <div className="md:w-3/4 space-y-2">
      {Object.entries(reviewsData.ratingBreakdown)
        .reverse()
        .map(([label, count], i) => {
          const total = Object.values(reviewsData.ratingBreakdown).reduce((a, b) => a + b, 0);
          const percentage = ((count / total) * 100).toFixed(1);
          const color = ["red", "orange", "yellow", "green", "green"][i];

          const labelMap = {
            excellent: "Excellent",
            veryGood: "Very Good",
            good: "Good",
            average: "Average",
            poor: "Poor",
          };

          return (
            <div key={label} className="flex items-center gap-4">
              <span className="w-20 text-sm font-medium">{labelMap[label]}</span>
              <div className="w-full bg-gray-200 h-3 rounded overflow-hidden">
                <div
                  className={`h-full bg-${color}-500`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <span className="w-12 text-right text-sm text-gray-700">{count}</span>
            </div>
          );
        })}
    </div>
  </div>

  {/* Divider */}
  <hr className="my-6" />

  {/* User Reviews */}
  {reviewsData.userReviews.map((review, index) => (
    <div key={index} className="space-y-2 mb-8">
      <div className="flex items-center gap-3">
        <img
          src="/user-icon.png"
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-medium">{review.user}</p>
          <div className="flex items-center text-green-600 text-sm font-semibold bg-green-100 px-2 py-0.5 rounded w-fit">
            {review.rating} ★
            <span className="ml-2 text-gray-500 font-normal">Posted on {review.date}</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-800">{review.comment}</p>

      {/* Review Images */}
      <div className="flex gap-2 mt-2">
        {review.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`review-img-${i}`}
            className="w-20 h-20 object-cover border rounded-md"
          />
        ))}
      </div>
    </div>
  ))}
</div>
    </div>
  </div>
</div>












<div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        You will also love these ✨
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, visibleCount).map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{product.title}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-1">{product.shortDescription}</p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                  <span className="line-through text-sm text-gray-400">₹{product.originalPrice}</span>
                  <span className="text-green-600 text-sm font-medium">{product.discount}</span>
                </div>

                <div className="mt-3 flex items-center gap-2 text-sm">
                  <span className="bg-green-500 text-white px-3 py-0.5 rounded-full font-semibold text-xs">
                    {product.totalRatings} ★
                  </span>
                  <span className="text-gray-500">({product.usersRated} Reviews)</span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < products.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white text-sm md:text-base font-semibold rounded-full shadow-md transition-all duration-200"
          >
            Show More Products
          </button>
        </div>
      )}
    </div>
   <Footer/>
   </>
  );
};

export default ProductDescription;




    // {/* <div className="bg-white p-6 rounded-lg mt-36 shadow-lg max-w-3xl mx-auto relative">
    //   {/* Heart Icon for Wishlist */}
    //   <div 
    //     onClick={handleWishlistClick}
    //     className="absolute top-4 right-4 cursor-pointer"
    //   >
    //     {isInWishlist ? (
    //       <AiFillHeart className="w-8 h-8 text-red-500" />
    //     ) : (
    //       <AiOutlineHeart className="w-8 h-8 text-gray-400" />
    //     )}
    //   </div>

    //   {/* Image Section */}
    //   <img
    //     src={product.image}
    //     alt={product.title}
    //     className="w-full h-72 object-cover rounded-md mb-6 shadow-md"
    //   />

    //   {/* Title Section */}
    //   <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.title}</h1>

    //   {/* Price & Rating Section */}
    //   <div className="flex items-center justify-between mb-6">
    //     <div className="text-pink-600 text-4xl font-bold">
    //       ₹{product.price}
    //     </div>
    //     <div className="flex items-center gap-2 text-yellow-500 text-sm">
    //       ★★★★☆ <span className="text-gray-500">({product.usersRated} Reviews)</span>
    //     </div>
    //   </div>

    //   {/* Original Price & Discount Section */}
    //   <div className="flex items-center gap-4 text-lg text-gray-700 mb-6">
    //     <span className="font-semibold text-gray-500">Original Price:</span>
    //     <span className="line-through text-gray-400">₹{product.originalPrice}</span>
    //     <span className="text-green-600 font-semibold">{product.discount}</span>
    //   </div>

    //   {/* Action Buttons Section */}
    //   <div className="flex justify-between items-center mt-4 gap-4">
    //     <button onClick={() => {
    //             dispatch(addToCart(product));
    //             Navigate("/carts"); 
    //           }} className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full focus:outline-none transition duration-300">
    //       Add to Cart
    //     </button>
    //     <Link
    //       to="/checkout"
    //       className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full text-center focus:outline-none transition duration-300"
    //     >
    //       Checkout
    //     </Link>
    //   </div>
    // {/* </div> */}