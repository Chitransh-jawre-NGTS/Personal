// // ProductDescription.jsx

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Features/carts/Cartslice";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Footer from "./Footer";
import TopFilterBar from "./TopFilterBar";
import toast, { Toaster } from "react-hot-toast";
import { fetchProducts } from "../Features/Produtcs/productSlice";




const ProductDescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts()); // fetch only if not already fetched
    }
  }, [dispatch, products.length]);

  const product = products.find((p) => p.id === Number(id));

  if (loading) return <div className="flex justify-center items-center h-screen">
      <div
        className="w-18 h-18 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"
        style={{ borderTopColor: "#3498db" }} // Inline style for spinner color
      ></div>
    </div>
;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;
   
  
  
  
  const handleShowMore = () => {
      setVisibleCount((prev) => prev + 20);
    };

  return (
    <>
    {/* <TopFilterBar/> */}
    {/* <Toaster/> */}
 <div className="container mx-auto p-4 md:p-10 bg-white mb-8 rounded-md shadow-md ">
  <div className="flex flex-col md:flex-row gap-10">
    
    {/* LEFT SIDE */}
    <div className="md:w-1/2 flex flex-col items-center">
      {/* Main Product Image */}
      <img
        src={product.images}
        alt={product.title}
        className="w-full max-h-[500px] object-cover rounded-lg"
      />

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 overflow-x-auto">
        {product.thumbnails?.map((thumb, index) => (
          <img
            key={index}
            src={product.images || "https://via.placeholder.com/300"}
            alt={`Thumb ${index}`}
            className="w-20 h-20 object-cover border border-gray-300 rounded-md cursor-pointer"
          />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col-2 sm:flex-row gap-4 mt-6 w-full justify-center">
        <button onClick={() => {
                dispatch(addToCart(product));
                // Navigate("/carts"); 
                message;
              }} className="bg-pink-600 text-white py-2 px-6 rounded hover:bg-pink-700 w-full sm:w-auto">
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
      <span className="text-4xl font-bold text-green-600">★</span>
      <p className="text-sm text-gray-600">
      {product.rating}
      </p>
    </div>

    {/* Rating Breakdown */}
    {/* <div className="md:w-3/4 space-y-2">
      {Object.entries(reviewsData.ratingBreakdown)
        .reverse()
        .map(([label, count], i) => {
          const total = Object.values.reduce((a, b) => a + b, 0);
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
    </div> */}
  </div>

  {/* Divider */}
  <hr className="my-6" />

  {/* User Reviews */}
  {/* {reviewsData.userReviews.map((review, index) => (
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
      {/* <div className="flex gap-2 mt-2">
        {review.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`review-img-${i}`}
            className="w-20 h-20 object-cover border rounded-md"
          />
        ))}
      </div>
    </div> */}
  {/* ))} * */}
</div>
    </div>
  </div>
</div>












{/* <div className="max-w-7xl mx-auto px-2 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        You will also love these ✨
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6">
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
      {/* {visibleCount < products.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white text-sm md:text-base font-semibold rounded-full shadow-md transition-all duration-200"
          >
            Show More Products
          </button>
        </div>
      )} */}
    {/* </div> * */}
   </>
  );
};

export default ProductDescription;





// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../Features/Produtcs/productSlice";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { items: products, loading, error } = useSelector((state) => state.products);

//   useEffect(() => {
//     if (!products.length) {
//       dispatch(fetchProducts()); // fetch only if not already fetched
//     }
//   }, [dispatch, products.length]);

//   const product = products.find((p) => p.id === Number(id));

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!product) return <div>Product not found</div>;

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
//       <img
//         src={product.images || "https://via.placeholder.com/300"}
//         alt={product.title}
//         className="w-full max-w-md h-64 object-contain mx-auto mb-4"
//       />
//       <p className="mb-2"><strong>Price:</strong> ₹{product.price}</p>
//       <p className="mb-2"><strong>Discount:</strong> {product.discountPercentage}%</p>
//       <p className="mb-2"><strong>Category:</strong> {product.category}</p>
//       <p className="mb-2"><strong>Brand:</strong> {product.brand}</p>
//       <p className="mb-2"><strong>Stock:</strong> {product.stock}</p>
//       <p className="mb-2"><strong>Rating:</strong> {product.rating} / 5</p>
//       <p className="mb-2"><strong>Description:</strong> {product.description}</p>

//       <h3 className="text-xl font-semibold mt-6">Reviews</h3>
//       <ul className="list-disc pl-5">
//         {product.reviews?.map((review, index) => (
//           <li key={index}>
//             <p className="font-semibold">{review.reviewerName} ({review.rating}/5)</p>
//             <p>{review.comment}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductDetail;
