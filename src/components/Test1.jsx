// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import {
//   FaShieldAlt,
//   FaStore,
//   FaTruck,
//   FaUndo,
//   FaRegCalendarAlt,
//   FaTools,
//   FaPhoneAlt,
// } from "react-icons/fa";
// import NewArrivals from "./NewArrival";
// import FilterSidebar from "./FilterSidebar";

// const productImages = [
//   "/images/gray.png",
//   "/images/blue.png",
//   "/images/navy.png",
//   "/images/black.png",
// ];

// const details = [
//   {
//     icon: <FaShieldAlt className="text-blue-500 text-xl" />,
//     title: "Warranty",
//     description: "1 Year Manufacturer Warranty on Product",
//   },
//   {
//     icon: <FaStore className="text-green-500 text-xl" />,
//     title: "Sold By",
//     description: "Mantu Clothing Pvt. Ltd.",
//   },
//   {
//     icon: <FaTruck className="text-orange-500 text-xl" />,
//     title: "Shipping",
//     description: "Free delivery in 3-5 business days",
//   },
//   {
//     icon: <FaUndo className="text-red-500 text-xl" />,
//     title: "Return Policy",
//     description: "10-day replacement or refund available",
//   },
//   {
//     icon: <FaTools className="text-purple-500 text-xl" />,
//     title: "Material",
//     description: "100% Cotton Fabric, Soft & Durable",
//   },
//   {
//     icon: <FaRegCalendarAlt className="text-yellow-500 text-xl" />,
//     title: "Manufactured On",
//     description: "April 2025",
//   },
//   {
//     icon: <FaPhoneAlt className="text-pink-500 text-xl" />,
//     title: "Customer Care",
//     description: "+91 98765-43210 (Mon-Sat, 10AM - 6PM)",
//   },
// ];

// const Test = () => {
//   const [selectedImage, setSelectedImage] = useState(productImages[0]);

//   return (
//     <>
//       {/* Top Section: Main Product + Filter */}
//       <div className="container mx-auto">
//         <div className="bg-white rounded-2xl shadow-md p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* LEFT: Product Section (2/3) */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Product Image */}
//             <div className="bg-[#f1f2f6] p-6 rounded-2xl flex justify-center">
//               <img
//                 src={selectedImage}
//                 alt="Main Product"
//                 className="h-96 object-contain"
//               />
//             </div>

//             {/* Thumbnails */}
//             <div className="mt-2 flex items-center gap-3 overflow-x-auto">
//               {productImages.map((img, i) => (
//                 <div
//                   key={i}
//                   onClick={() => setSelectedImage(img)}
//                   className={`rounded-xl border-2 p-1 cursor-pointer transition ${
//                     selectedImage === img ? "border-blue-500" : "border-gray-300"
//                   }`}
//                 >
//                   <img src={img} alt={`Thumb ${i}`} className="h-20 w-20 object-contain" />
//                 </div>
//               ))}
//             </div>

//             {/* Product Info */}
//             <div className="space-y-4">
//               <h2 className="text-2xl font-bold text-gray-800">
//                 Mantu Women's Solid Slim Fit Classic Round Neck Cotton Fabric T-Shirt.
//               </h2>

//               <div className="flex items-center gap-2 text-yellow-500">
//                 {[...Array(4)].map((_, i) => <FaStar key={i} />)}
//                 <span className="text-gray-500 ml-2 text-sm">992 Ratings</span>
//               </div>

//               <div className="flex items-end gap-2">
//                 <span className="text-3xl font-bold text-gray-900">$664.00</span>
//                 <span className="text-blue-600 font-semibold">-78%</span>
//               </div>
//               <p className="text-sm text-gray-500">M.R.P: <s>$2,999.00</s></p>

//               {/* Countdown */}
//               <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl">
//                 <div>
//                   <p className="text-sm text-gray-700">
//                     Real time <span className="bg-yellow-400 px-2 py-1 rounded font-bold">56</span> visitor right now!
//                   </p>
//                   <p className="text-xl font-semibold text-gray-800 mt-1">448 Days 6 : 42 : 36</p>
//                 </div>
//                 <p className="text-sm text-red-500 font-medium">Time is Running Out!</p>
//               </div>

//               <div className="text-sm text-gray-700 space-y-2">
//                 <p>
//                   Lorem Ipsum is simply dummy text of the printing and typesetting
//                   industry. Lorem Ipsum has been the industry's standard dummy text
//                   ever since the 1990.
//                 </p>
//                 <p>
//                   There are many variations of passages of Lorem Ipsum available,
//                   but the majority have suffered alteration in some form.
//                 </p>
//               </div>

//               <ul className="text-sm text-gray-700 list-disc ml-5">
//                 <li><strong>Closure</strong>: Hook & Loop</li>
//                 <li><strong>Sole</strong>: Polyvinyl Chloride</li>
//               </ul>

//               <div>
//                 <p className="text-sm text-gray-600"><strong>SKU#:</strong> WH123456</p>
//                 <p className="text-sm text-green-600 font-semibold mt-1">IN STOCK</p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: Filter Sidebar (1/3) */}
//           <div>
//             <FilterSidebar />
//           </div>
//         </div>
//       </div>

//       {/* Product Details Section (Full Width) */}
//       <div className="container mx-auto mt-10 px-4">
//         <div className="bg-white p-6 rounded-2xl shadow-md">
//           <h3 className="text-xl font-semibold mb-6 text-gray-800">Product Details</h3>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {details.map((detail, i) => (
//               <div
//                 key={i}
//                 className="flex items-start gap-4 p-4 rounded-xl bg-[#f8f9fc] border border-gray-200"
//               >
//                 <div>{detail.icon}</div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800">{detail.title}</h4>
//                   <p className="text-sm text-gray-600">{detail.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Related Items */}
//       <div className="container mx-auto my-10 px-4">
//         <NewArrivals heading="Related Items" bgColor="bg-blue-100" />
//       </div>
//     </>
//   );
// };

// export default Test;
import React, { useState } from "react";
import { FaStar, FaBox, FaTruck, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import NewArrivals from "./NewArrival";

const productImages = [
  "https://via.placeholder.com/500x500?text=Product+1",
  "https://via.placeholder.com/500x500?text=Product+2",
  "https://via.placeholder.com/500x500?text=Product+3",
  "https://via.placeholder.com/500x500?text=Product+4",
];

const sizes = ["S", "M", "L", "XL", "XXL"];

const Test = () => {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className="max-w-6xl rounded-2xl mx-auto px-4 py-10 font-sans bg-white p-50 text-gray-800 animate-fadeIn">
      <div className="text-sm text-gray-500 mb-1">
        <span className="text-blue-500 hover:underline cursor-pointer">Home</span> /
        <span className="text-blue-500 hover:underline cursor-pointer ml-1">Men</span> /
        <span className="ml-1">Hoodies</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="rounded-xl border p-4 bg-gray-100">
            <img src={selectedImage} alt="Product" className="w-full h-[500px] object-contain rounded-lg" />
          </div>
          <div className="flex gap-3 mt-4 justify-center">
            {productImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumb ${i}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-lg border-2 cursor-pointer transition-transform duration-300 hover:scale-110 ${
                  selectedImage === img ? "border-black" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div className="space-y-6" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold text-gray-900 leading-snug">Loose Fit Hoodie</h2>
            <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">Bestseller</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-1 text-yellow-400">
              {[...Array(4)].map((_, i) => <FaStar key={i} />)}
              <FaStar className="text-gray-300" />
            </div>
            <span className="text-sm text-gray-500">(4.2/5 · 245 reviews)</span>
          </div>

          <p className="text-2xl font-bold text-gray-900">$24.99</p>
          <p className="text-sm text-gray-500">Order in <span className="text-red-500 font-semibold">03:20:25</span> for next day delivery</p>

          <div className="space-y-2">
            <p className="font-semibold">Select Size</p>
            <div className="flex gap-3 flex-wrap">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 font-medium ${
                    selectedSize === size ? "bg-black text-white border-black" : "border-gray-300 text-gray-800 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <span className="font-semibold">Qty</span>
            <div className="flex border rounded-md overflow-hidden">
              <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300">-</button>
              <input type="number" value={1} readOnly className="w-10 text-center border-l border-r bg-white" />
              <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300">+</button>
            </div>
          </div>

          <motion.button
            className="mt-4 w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors"
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.01 }}
          >
            Add to Cart
          </motion.button>

          <div className="mt-8">
            <div className="flex gap-4 border-b mb-4">
              <button className="pb-2 border-b-2 border-black font-semibold">Description</button>
              <button className="pb-2 text-gray-500 hover:text-black">Shipping Info</button>
              <button className="pb-2 text-gray-500 hover:text-black">Reviews</button>
            </div>
            <p className="text-sm text-gray-700">
              Loose-fit sweatshirt hoodie in premium cotton blend. Jersey-lined, drawstring hood, dropped shoulders, and kangaroo pocket. Ideal for both casual and workout wear.
            </p>
          </div>

          <div className="mt-6 border-t pt-4 space-y-4">
            <h3 className="font-semibold text-lg">Delivery & Shipping</h3>
            <ul className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <li className="flex items-center gap-3">
                <FaTruck className="text-lg text-green-600" />
                Free Delivery by <strong>12 July</strong> if ordered today
              </li>
              <li className="flex items-center gap-3">
                <FaBox className="text-lg text-blue-500" />
                30-Day Easy Returns
              </li>
              <li className="flex items-center gap-3">
                <FaCalendarAlt className="text-lg text-purple-600" />
                Estimated Delivery: <strong>10–12 July</strong>
              </li>
              <li className="flex items-center gap-3">
                <FaBox className="text-lg text-yellow-600" />
                Secure Packaging
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-10 items-start">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="text-xl font-semibold mb-2">Rating & Reviews</h3>
          <div className="text-5xl font-bold">4.2<span className="text-gray-400 text-2xl">/5</span></div>
          <p className="text-sm text-gray-500">(245 Reviews)</p>
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            {[80, 60, 30, 10, 5].map((val, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-8 text-right">{5 - i}</span>
                <div className="bg-gray-200 rounded-full w-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${val}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="flex gap-3 items-start">
            <img src="https://via.placeholder.com/100x100?text=User" alt="Reviewer" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h4 className="font-semibold text-base">Alex Mathio</h4>
              <div className="flex gap-1 text-yellow-400 mb-1">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="text-sm text-gray-600 italic">
                “NextGen’s dedication to sustainability and ethical practices resonates strongly...”
              </p>
              <p className="text-xs text-gray-400 mt-1">Reviewed on 13 Oct 2024</p>
            </div>
          </div>
        </motion.div>
      </div>

      <NewArrivals heading="Related Products"/>
    </div>
  );
};

export default Test;