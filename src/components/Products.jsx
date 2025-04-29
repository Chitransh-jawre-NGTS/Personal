// ProductGrid.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductGrid = () => {
  const [visibleCount, setVisibleCount] = useState(20);

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

  return (
    <div className="max-w-7xl mx-auto px-1 lg:px-4 lg:py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6">
        {products.slice(0, visibleCount).map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.1 }}
              className="bg-white rounded-lg shadow hover:shadow-md transition-all"
            >
              <img src={product.image} alt={product.title} className="w-full h-56 object-cover rounded-md" />
              <div className="p-4">
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
  );
};

export default ProductGrid;
