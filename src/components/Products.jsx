// // // // ProductGrid.jsx

// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import TopFilterBar from "./TopFilterBar";
// // import { fetchProducts } from '../Features/Produtcs/productSlice'; // update the path as needed
// // import { useDispatch, useSelector } from "react-redux";

// // const ProductGrid = () => {
// //   const [visibleCount, setVisibleCount] = useState(20);

// //   const dispatch = useDispatch();
// //   const { items: products, loading, error } = useSelector((state) => state.products);


// //   // Set total products dynamically
// //   const totalProducts = 50; // you can change this anytime
// //   // const products = Array.from({ length: totalProducts }, (_, i) => ({
// //   //   id: (i + 1).toString(), // id as string
// //   //   image: `https://picsum.photos/300/300?random=${i + 1}`,
// //   //   title: `Product ${i + 1} - Example Product Title`,
// //   //   price: 100 + i,
// //   //   originalPrice: 150 + i,
// //   //   discount: `${Math.floor(Math.random() * 30) + 10}% off`,
// //   //   totalRatings: Math.floor(Math.random() * 500),
// //   //   usersRated: Math.floor(Math.random() * 200),
// //   // }));


// //   useEffect(() => {
// //     dispatch(fetchProducts());
// //   }, [dispatch]);
// //   console.log(products);

// //   // const handleShowMore = () => {
// //   //   setVisibleCount((prev) => prev + 20);
// //   // };


// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

  
// //   return (
// //     <>
// //     <TopFilterBar/>
// //     <div className="max-w-7xl mx-auto px-1 lg:px-4 lg:py-8">
// //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6">
// //         {products.slice(0, visibleCount).map((product) => (
// //           <Link key={product.id} to={`/product/${product.id}`}>
// //             <motion.div
// //               whileHover={{ scale: 1.05 }}
// //               transition={{ type: 'tween', ease: 'easeInOut', duration: 0.1 }}
// //               className="bg-white rounded-lg shadow hover:shadow-md transition-all"
// //             >
// //               <img src={product.image} alt={product.title} className="w-full h-56 object-cover rounded-md" />
// //               <div className="p-4">
// //                 <h3 className="text-base font-semibold line-clamp-2">{product.title}</h3>
// //                 <div className="mt-2 text-base">
// //                   <span className="font-bold text-black">₹{product.price}</span>{' '}
// //                   <span className="line-through text-gray-400 text-sm">₹{product.originalPrice}</span>{' '}
// //                   <span className="text-green-600 text-sm">{product.discount}</span>
// //                 </div>
// //                 <div className="mt-4 text-sm text-gray-700">
// //                   <span className="font-semibold bg-green-400 text-white rounded-full px-4 py-2">
// //                     {product.totalRatings}
// //                   </span>
// //                   <span className="text-gray-500">({product.usersRated} Reviews)</span>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </Link>
// //         ))}
// //       </div>

// //       {/* Show More Button */}
// //       {visibleCount < products.length && (
// //         <div className="flex justify-center mt-8">
// //           <button

// //             className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-md"
// //           >
// //             Show More
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //     </>
// //   );
// // };

// // export default ProductGrid;



// // const ProductGrid = () => {
// //   const [visibleCount, setVisibleCount] = useState(20);

// //   const dispatch = useDispatch();
// //   const { items: products, loading, error } = useSelector((state) => state.products);

// //   useEffect(() => {
// //     dispatch(fetchProducts());
// //   }, [dispatch]);

// //   const handleShowMore = () => {
// //     setVisibleCount((prev) => prev + 20);
// //   };

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   // ✅ Moved this check after all hooks
// //   if (!Array.isArray(products)) {
// //     return <div>Error: Products data is not available.</div>;
// //   }

// //   return (
// //     <>
// //       <TopFilterBar />
// //       <div className="max-w-7xl mx-auto px-1 lg:px-4 lg:py-8">
// //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6">
// //           {products.slice(0, visibleCount).map((product) => (
// //             <Link key={product.id} to={`/product/${product.id}`}>
// //               <motion.div
// //                 whileHover={{ scale: 1.05 }}
// //                 transition={{ type: 'tween', ease: 'easeInOut', duration: 0.1 }}
// //                 className="bg-white rounded-lg shadow hover:shadow-md transition-all"
// //               >
// //                 <img src={product.image} alt={product.title} className="w-full h-56 object-cover rounded-md" />
// //                 <div className="p-4">
// //                   <h3 className="text-base font-semibold line-clamp-2">{product.title}</h3>
// //                   <div className="mt-2 text-base">
// //                     <span className="font-bold text-black">₹{product.price}</span>{' '}
// //                     <span className="line-through text-gray-400 text-sm">₹{product.originalPrice}</span>{' '}
// //                     <span className="text-green-600 text-sm">{product.discount}</span>
// //                   </div>
// //                   <div className="mt-4 text-sm text-gray-700">
// //                     <span className="font-semibold bg-green-400 text-white rounded-full px-4 py-2">
// //                       {product.totalRatings}
// //                     </span>
// //                     <span className="text-gray-500">({product.usersRated} Reviews)</span>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             </Link>
// //           ))}
// //         </div>

// //         {visibleCount < products.length && (
// //           <div className="flex justify-center mt-8">
// //             <button
// //               onClick={handleShowMore}
// //               className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-md"
// //             >
// //               Show More
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // export default ProductGrid;


// // src/components/ProductGrid.jsx
































// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { fetchProducts } from "../Features/Produtcs/productSlice"; 
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from 'react-hot-toast'; // Fixed the import here

// const ProductGrid = () => {
//   const [visibleCount, setVisibleCount] = useState(20);
//   const dispatch = useDispatch();
//   const { items: products, loading, error } = useSelector((state) => state.products);

//   // Dispatch the API call as soon as the component mounts
//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   // Handler to load more products
//   const handleShowMore = () => {
//     setVisibleCount((prev) => prev + 20);
//   };

//   // Conditional rendering based on status
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   // Optional safety check: Ensure products is an array
//   if (!Array.isArray(products) || products.length === 0) {
//     return <div>No products available</div>;
//   }

//   const handleWishlistClick = () => {
//     setIsInWishlist(!isInWishlist);
//     if (!isInWishlist) {
//       toast.success('Item added to wishlist!');
//     } else {
//       toast.success('Item removed from wishlist!');
//     }
//   };

//   return (
//     <>
//       <div className="max-w-7xl container mx-auto px-1 lg:px-4 lg:py-8">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6">
//           {products.slice(0, visibleCount).map((product) => (
//             <Link key={product.id} to={`/product/${product.id}`} onClick={() => dispatch(selectProduct(product))}>
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "tween", ease: "easeInOut", duration: 0.1 }}
//                 className="bg-white rounded-lg shadow hover:shadow-md transition-all"
//               >
//                 <img
//                   src={product.images || "/placeholder.png"}
//                   alt={product.title}
//                   className="w-full h-56 object-contain rounded-md"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-base font-semibold line-clamp-2">
//                     {product.title}
//                   </h3>
//                   <div className="mt-2 text-base">
//                     <span className="font-bold text-black">₹{product.price}</span>{" "}
//                     <span className="line-through text-gray-400 text-sm">
//                       ₹{product.originalPrice}
//                     </span>{" "}
//                     <span className="text-green-600 text-sm">
//                       {product.discount}
//                     </span>
//                   </div>
//                   <div className="mt-4 text-sm text-gray-700">
//                     <span className="font-semibold bg-green-400 text-white rounded-full px-4 py-2">
//                       {product.rating.rate}
//                     </span>
//                     <span className="text-gray-500">
//                       ({product.usersRated} Reviews)
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             </Link>
//           ))}
//         </div>

//         {visibleCount < products.length && (
//           <div className="flex justify-center mt-8">
//             <button
//               onClick={handleShowMore}
//               className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-md"
//             >
//               Show More
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProductGrid;
import React from "react";

const sampleProducts = [
  {
    id: 1,
    title: "Noise Smartwatch",
    image: "https://picsum.photos/id/1050/400/300", // Replaced with Picsum
    price: 2999,
    discount: 50,
  },
  {
    id: 2,
    title: "Sony Bluetooth Headphones",
    image: "https://picsum.photos/id/237/400/300",
    price: 3999,
    discount: 40,
  },
  {
    id: 3,
    title: "Boat Bluetooth Speaker",
    image: "https://picsum.photos/id/1084/400/300",
    price: 2499,
    discount: 35,
  },
  {
    id: 4,
    title: "TWS Earbuds",
    image: "https://picsum.photos/id/1011/400/300",
    price: 1599,
    discount: 30,
  },
];

const ProductSection = ({ title = "Top Discounts", products = sampleProducts }) => {
  return (
    <section className="md:px-6 md:py-10 bg-gradient-to-br from-white to-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-4 border border-gray-200"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded">
                {product.discount}% OFF
              </span>
            </div>
            <h3 className="mt-3 font-semibold text-gray-800 text-sm">{product.title}</h3>
            <p className="text-sm text-gray-600 mt-1">₹{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
