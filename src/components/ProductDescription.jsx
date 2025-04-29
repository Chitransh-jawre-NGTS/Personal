// ProductDescription.jsx

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/carts/Cartslice";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';


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
    <div className="bg-white p-6 rounded-lg mt-36 shadow-lg max-w-3xl mx-auto ">
      {/* Image Section */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-72 object-cover rounded-md mb-6 shadow-md"
      />

      {/* Title Section */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.title}</h1>

      {/* Price & Rating Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-pink-600 text-4xl font-bold">
          ₹{product.price}
        </div>
        <div className="flex items-center gap-2 text-yellow-500 text-sm">
          ★★★★☆ <span className="text-gray-500">({product.usersRated} Reviews)</span>
        </div>
      </div>

      {/* Original Price & Discount Section */}
      <div className="flex items-center gap-4 text-lg text-gray-700 mb-6">
        <span className="font-semibold text-gray-500">Original Price:</span>
        <span className="line-through text-gray-400">₹{product.originalPrice}</span>
        <span className="text-green-600 font-semibold">{product.discount}</span>
      </div>

      {/* Action Buttons Section */}
      <div className="flex justify-between items-center mt-4 gap-4">
        <button onClick={() => {
                dispatch(addToCart(product));
                Navigate("/carts"); 
              }} className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full focus:outline-none transition duration-300">
          Add to Cart
        </button>
        <Link
          to="/checkout"
          className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full text-center focus:outline-none transition duration-300"
        >
          Checkout
        </Link>
      </div>
    </div> 







     <div className="max-w-7xl mx-auto px-4 py-8">
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {products.slice(0, visibleCount).map((product) => (
         <Link key={product.id} to={`/product/${product.id}`}>
           <motion.div
             whileHover={{ scale: 1.05 }}
             transition={{ type: 'tween', ease: 'easeInOut', duration: 0.1 }}
             className="bg-white rounded-lg shadow hover:shadow-md transition-all"
           >
             <img src={product.image} alt={product.title} className="w-full h-56 object-cover rounded-md" />
             <div className="py-3">
               <h3 className="text-base font-semibold line-clamp-2">{product.title}</h3>
               <div className="mt-2 text-base">
                 <span className="font-bold text-black">₹{product.price}</span>{' '}
                 <span className="line-through text-gray-400 text-sm">₹{product.originalPrice}</span>{' '}
                 <span className="text-green-600 text-sm">{product.discount}</span>
               </div>
               <div className="mt-4 text-sm text-gray-700">
                 <span className="font-semibold bg-green-400 text-white rounded-full px-4 py-2">{product.totalRatings}</span>
                 <span className="text-gray-500">({product.usersRated} Reviews)</span>
               </div>
             </div>
           </motion.div>
         </Link>
       ))}
     </div>

     {/* Show More Button */}
     {visibleCount < products.length && (
       <div className="flex justify-center mt-8">
         <button
           onClick={handleShowMore}
           className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-md"
         >
           Show More
         </button>
       </div>
     )}
   </div>
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