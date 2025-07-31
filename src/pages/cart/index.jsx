

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { removeFromCart, increaseQuantity, decreaseQuantity } from "../Features/carts/Cartslice";
// import Navbar from "../components/Navbar"
// import { motion } from "framer-motion";
// import { setBuyNowItem } from "../Features/BuyNow/buyNowSlice";
// import { ShoppingCart } from "lucide-react";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const dispatch = useDispatch();

//   const handleRemove = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const handleIncrease = (id) => {
//     dispatch(increaseQuantity(id));
//   };

//   const handleDecrease = (id) => {
//     dispatch(decreaseQuantity(id));
//   };

//   // Random original price if not present (for showing discount)
//   const getOriginalPrice = (item) => {
//     return item.originalPrice || Math.round(item.price * 1.2); // Assume 20% more than discounted price
//   };

//   const getTotalOriginalPrice = () => {
//     return cartItems.reduce((total, item) => total + getOriginalPrice(item) * item.quantity, 0);
//   };

//   const getTotalDiscount = () => {
//     return cartItems.reduce((total, item) => total + (getOriginalPrice(item) - item.price) * item.quantity, 0);
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const getDeliveryCharges = () => {
//     const price = getTotalPrice();
//     return price > 500 ? 0 : 50;
//   };

//   const getCommissionCharges = () => {
//     return getTotalPrice() * 0.02;
//   };

//   const getFinalAmount = () => {
//     return getTotalPrice() + getDeliveryCharges() + getCommissionCharges();
//   };

//   return (
//     <>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//         {/* <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">🛒 Your Shopping Cart</h2> */}

//         {cartItems.length > 0 ? (
//           <div className="space-y-5 mt-10 mb-20">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white/60 backdrop-blur-lg shadow-lg p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition"
//               >
//                 {/* Left Section */}
//                 <div className="flex items-start sm:items-center gap-6 w-full sm:w-auto">
//                   <img src={item.images} alt={item.title} className="w-28 h-28 rounded-xl object-cover shadow-md" />
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
//                     <p className="text-sm text-gray-500 mb-2">Category: {item.category || 'General'}</p>
//                     <div className="flex items-center gap-2">
//                       <span className="text-gray-400 line-through">₹{getOriginalPrice(item)}</span>
//                       <span className="text-pink-600 font-bold text-lg">₹{item.price}</span>
//                       <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
//                         {Math.round(((getOriginalPrice(item) - item.price) / getOriginalPrice(item)) * 100)}% OFF
//                       </span>
//                     </div>
//                     <p className="text-xs text-green-500 mt-1">🚚 Delivery in 2–4 days</p>
//                   </div>
//                 </div>

//                 {/* Right Section */}
//                 <div className="flex flex-col-2 sm:flex-row items-center justify-between gap-4 mt-4 sm:mt-0">
//                   <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1 shadow-inner">
//                     <button
//                       onClick={() => handleDecrease(item.id)}
//                       className="text-xl font-bold px-2 hover:text-red-600"
//                     >−</button>
//                     <span className="text-base font-semibold">{item.quantity}</span>
//                     <button
//                       onClick={() => handleIncrease(item.id)}
//                       className="text-xl font-bold px-2 hover:text-green-600"
//                     >＋</button>
//                   </div>

//                   <button
//                     onClick={() => handleRemove(item.id)}
//                     className="text-sm ms-5 text-red-600 hover:underline"
//                   >
//                     ❌ Remove
//                   </button>
//                 </div>
//               </div>
//             ))}

//             {/* Price Summary */}
//             <div className="bg-white/60 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl p-6 mt-10">
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">🧾 Price Breakdown</h3>
//               <div className="space-y-3 text-sm sm:text-base font-medium">
//                 <div className="flex justify-between">
//                   <span>Total MRP:</span>
//                   <span>₹{getTotalOriginalPrice().toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-green-600">
//                   <span>Discount on MRP:</span>
//                   <span>-₹{getTotalDiscount().toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Delivery Charges:</span>
//                   <span>₹{getDeliveryCharges().toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Commission Charges:</span>
//                   <span>₹{getCommissionCharges().toFixed(2)}</span>
//                 </div>
//                 <hr className="border-gray-300" />
//                 <div className="flex justify-between text-xl font-bold text-pink-700">
//                   <span>Final Amount:</span>
//                   <span>₹{getFinalAmount().toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
//               <Link
//                 to="/"
//                 className="w-full sm:w-auto text-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-black rounded-full font-semibold transition-all"
//               >
//                 🛍️ Continue Shopping
//               </Link>
//               <Link
//                 to="/checkout"
//                 className="w-full sm:w-auto text-center px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-semibold transition-all"
//               >
//                 <button
//                   onClick={() => {
//                     dispatch(setBuyNowItem(product));
//                     navigate("/checkout");
//                   }}
//                   className=""
//                 >
//                   Buy Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ) : (
//               <div className="text-center mt-30 text-gray-500 text-lg px-4">
//       <ShoppingCart size={48} className="mx-auto mb-4 text-blue-500" />
//       <p className="text-2xl font-semibold">Your cart is feeling lonely 😢</p>
//       <p className="mt-2">Looks like you haven't added anything yet.</p>
      
//       <Link
//         to="/"
//         className="text-pink-600 hover:underline mt-4 block text-base font-medium"
//       >
//          Go back to explore products
//       </Link>

//       <div className="mt-10">
//         <p className="font-medium mb-2">Popular Picks for You:</p>
//         <div className="flex justify-center gap-4 flex-wrap">
//           {/* Dummy product suggestions */}
//           <div className="w-40 p-3 border rounded-lg shadow hover:shadow-md transition">
//             <img
//               src="https://picsum.photos/100?random=1"
//               alt="Product 1"
//               className="mx-auto mb-2 rounded"
//             />
//             <p className="text-sm font-semibold">Trendy Shoes</p>
//           </div>
//           <div className="w-40 p-3 border rounded-lg shadow hover:shadow-md transition">
//             <img
//               src="https://picsum.photos/100?random=2"
//               alt="Product 2"
//               className="mx-auto mb-2 rounded"
//             />
//             <p className="text-sm font-semibold">Cool Headphones</p>
//           </div>
//           <div className="w-40 p-3 border rounded-lg shadow hover:shadow-md transition">
//             <img
//               src="https://picsum.photos/100?random=3"
//               alt="Product 3"
//               className="mx-auto mb-2 rounded"
//             />
//             <p className="text-sm font-semibold">Stylish Backpack</p>
//           </div>
//         </div>
//       </div>
//     </div>
//         )}
//       </div>

//     </>
//   );
// };

// export default Cart;

import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      title: "Trendy Shoes",
      images: "https://picsum.photos/200?random=1",
      price: 1200,
      originalPrice: 1500,
      category: "Footwear",
      quantity: 1,
    },
    {
      id: 2,
      title: "Cool Headphones",
      images: "https://picsum.photos/200?random=2",
      price: 999,
      originalPrice: 1299,
      category: "Audio",
      quantity: 2,
    },
  ];

  const getOriginalPrice = (item) => item.originalPrice || item.price * 1.2;
  const getTotalOriginalPrice = () =>
    cartItems.reduce((total, item) => total + getOriginalPrice(item) * item.quantity, 0);
  const getTotalDiscount = () =>
    cartItems.reduce((total, item) => total + (getOriginalPrice(item) - item.price) * item.quantity, 0);
  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const getDeliveryCharges = () => (getTotalPrice() > 500 ? 0 : 50);
  const getCommissionCharges = () => getTotalPrice() * 0.02;
  const getFinalAmount = () =>
    getTotalPrice() + getDeliveryCharges() + getCommissionCharges();

  return (
    <div className="max-w-full p-8 mx-auto  pt-28 pb-16">
      {cartItems.length > 0 ? (
        <>
          <h1 className="text-3xl mt-5 font-bold text-gray-800 mb-8">
             Shopping Cart ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
          </h1>

          {/* Cart Items */}
          <section className="grid gap-6">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white rounded-2xl shadow border border-gray-200 p-6"
              >
                <div className="flex items-start gap-5 w-full md:w-auto">
                  <img
                    src={item.images}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg shadow"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                    <p className="text-sm text-gray-500">Category: {item.category}</p>
                    <div className="flex items-center gap-3 mt-1 text-sm">
                      <span className="line-through text-gray-400">₹{getOriginalPrice(item)}</span>
                      <span className="text-pink-600 font-bold">₹{item.price}</span>
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                        {Math.round(((getOriginalPrice(item) - item.price) / getOriginalPrice(item)) * 100)}% OFF
                      </span>
                    </div>
                    <p className="text-xs text-green-500 mt-1">🚚 Delivery in 2–4 days</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-4 md:mt-0">
                  <div className="flex items-center border rounded-lg px-3 py-1 bg-gray-100">
                    <button
                      className="text-xl font-bold px-2 text-red-600 hover:scale-105 transition"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="px-2 font-semibold">{item.quantity}</span>
                    <button
                      className="text-xl font-bold px-2 text-green-600 hover:scale-105 transition"
                      aria-label="Increase quantity"
                    >
                      ＋
                    </button>
                  </div>
                  <button
                    className="text-red-500 hover:underline text-sm"
                    aria-label="Remove item"
                  >
                    ❌ Remove
                  </button>
                </div>
              </article>
            ))}
          </section>

          {/* Price Summary */}
          <section className="mt-12 bg-white rounded-2xl border shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">💰 Price Summary</h2>
            <div className="space-y-3 text-gray-700 text-sm sm:text-base">
              <div className="flex justify-between">
                <span>Total MRP:</span>
                <span>₹{getTotalOriginalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount:</span>
                <span>-₹{getTotalDiscount().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges:</span>
                <span>{getDeliveryCharges() === 0 ? "Free" : `₹${getDeliveryCharges().toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Commission:</span>
                <span>₹{getCommissionCharges().toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between text-lg font-bold text-pink-700">
                <span>Total Payable:</span>
                <span>₹{getFinalAmount().toFixed(2)}</span>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-between">
            <Link
              to="/"
              className="w-full sm:w-auto text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-3 rounded-full transition"
            >
              🛍️ Continue Shopping
            </Link>
            <Link
              to="/checkout"
              className="w-full sm:w-auto text-center bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center py-20 text-gray-600">
          <ShoppingCart size={64} className="mx-auto text-blue-400 mb-4" />
          <h2 className="text-2xl font-semibold">Your cart is currently empty 😔</h2>
          <p className="mt-2">Browse our collection and add some products!</p>
          <Link
            to="/"
            className="inline-block mt-6 text-pink-600 hover:underline font-medium"
          >
            Explore Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
