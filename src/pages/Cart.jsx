// // Cart.jsx

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { removeFromCart, increaseQuantity,decreaseQuantity } from "../Features/carts/Cartslice"; 
// import Navbar from "../components/Navbar"
// import CatagoryNavbar from "../components/CatagoryNavbar"
// import { motion } from "framer-motion";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems); // Getting cartItems from Redux store
//   const dispatch = useDispatch();

//   // Handle Remove item from cart
//   const handleRemove = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   // Handle increase quantity
//   const handleIncrease = (id) => {
//     dispatch(increaseQuantity(id));
//   };

//   // Handle decrease quantity
//   const handleDecrease = (id) => {
//     dispatch(decreaseQuantity(id));
//   };

//   // Total price calculation
//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

  

//   return (<>
//     <Navbar/>
//     <CatagoryNavbar/>
//     <div className="max-w-7xl mx-auto mt-25 px-4 py-8">
//       <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

//       {/* Cart Items List */}
//       {cartItems.length > 0 ? (
//         <div className="space-y-6">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center justify-between p-4 border-b">
//               <div className="flex items-center space-x-4">
//                <Link  to={`/`}> <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md" /></Link>
//                 <div>
//                   <h3 className="text-lg font-semibold">{item.title}</h3>
//                   <p className="text-gray-500">₹{item.price}</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <button
//                   onClick={() => handleDecrease(item.id)}
//                   className="px-3 py-1 bg-gray-300 text-black rounded-lg"
//                 >
//                   -
//                 </button>
//                 <span className="text-lg font-semibold">{item.quantity}</span>
//                 <button
//                   onClick={() => handleIncrease(item.id)}
//                   className="px-3 py-1 bg-gray-300 text-black rounded-lg"
//                 >
//                   +
//                 </button>
//               </div>

//               <button
//                 onClick={() => handleRemove(item.id)}
//                 className="text-red-600 hover:text-red-800"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           {/* Total Price */}
//           <div className="flex justify-between items-center mt-8 text-lg font-semibold">
//             <span>Total Price:</span>
//             <span>₹{getTotalPrice()}</span>
//           </div>

//           <div className="flex justify-between mt-8">
//             <Link to="/" className="px-6 py-2 bg-gray-200 text-black rounded-full">Continue Shopping</Link>
//             <Link to="/checkout" className="px-6 py-2 bg-pink-600 text-white rounded-full">Checkout</Link>
//           </div>
//         </div>
//       ) : (
//         <p>Your cart is empty. Start adding products!</p>
//       )}
//     </div>


//     </>
//   );
// };

// export default Cart;


// Cart.jsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../Features/carts/Cartslice"; 
import Navbar from "../components/Navbar"
import CatagoryNavbar from "../components/CatagoryNavbar"
import { motion } from "framer-motion";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  // Random original price if not present (for showing discount)
  const getOriginalPrice = (item) => {
    return item.originalPrice || Math.round(item.price * 1.2); // Assume 20% more than discounted price
  };

  const getTotalOriginalPrice = () => {
    return cartItems.reduce((total, item) => total + getOriginalPrice(item) * item.quantity, 0);
  };

  const getTotalDiscount = () => {
    return cartItems.reduce((total, item) => total + (getOriginalPrice(item) - item.price) * item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getDeliveryCharges = () => {
    const price = getTotalPrice();
    return price > 500 ? 0 : 50;
  };

  const getCommissionCharges = () => {
    return getTotalPrice() * 0.02;
  };

  const getFinalAmount = () => {
    return getTotalPrice() + getDeliveryCharges() + getCommissionCharges();
  };

  return (
    <>
      <Navbar />
      <CatagoryNavbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">🛒 Your Shopping Cart</h2>

  {cartItems.length > 0 ? (
    <div className="space-y-10">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white/60 backdrop-blur-lg shadow-lg p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition"
        >
          {/* Left Section */}
          <div className="flex items-start sm:items-center gap-6 w-full sm:w-auto">
            <img src={item.image} alt={item.title} className="w-28 h-28 rounded-xl object-cover shadow-md" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-2">Category: {item.category || 'General'}</p>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through">₹{getOriginalPrice(item)}</span>
                <span className="text-pink-600 font-bold text-lg">₹{item.price}</span>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                  {Math.round(((getOriginalPrice(item) - item.price) / getOriginalPrice(item)) * 100)}% OFF
                </span>
              </div>
              <p className="text-xs text-green-500 mt-1">🚚 Delivery in 2–4 days</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 sm:mt-0">
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1 shadow-inner">
              <button
                onClick={() => handleDecrease(item.id)}
                className="text-xl font-bold px-2 hover:text-red-600"
              >−</button>
              <span className="text-base font-semibold">{item.quantity}</span>
              <button
                onClick={() => handleIncrease(item.id)}
                className="text-xl font-bold px-2 hover:text-green-600"
              >＋</button>
            </div>

            <button
              onClick={() => handleRemove(item.id)}
              className="text-sm text-red-600 hover:underline"
            >
              ❌ Remove
            </button>
          </div>
        </div>
      ))}

      {/* Price Summary */}
      <div className="bg-white/60 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl p-6 mt-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">🧾 Price Breakdown</h3>
        <div className="space-y-3 text-sm sm:text-base font-medium">
          <div className="flex justify-between">
            <span>Total MRP:</span>
            <span>₹{getTotalOriginalPrice().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount on MRP:</span>
            <span>-₹{getTotalDiscount().toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges:</span>
            <span>₹{getDeliveryCharges().toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Commission Charges:</span>
            <span>₹{getCommissionCharges().toFixed(2)}</span>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between text-xl font-bold text-pink-700">
            <span>Final Amount:</span>
            <span>₹{getFinalAmount().toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
        <Link
          to="/"
          className="w-full sm:w-auto text-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-black rounded-full font-semibold transition-all"
        >
          🛍️ Continue Shopping
        </Link>
        <Link
          to="/checkout"
          className="w-full sm:w-auto text-center px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-semibold transition-all"
        >
          ✅ Proceed to Checkout
        </Link>
      </div>
    </div>
  ) : (
    <div className="text-center mt-20 text-gray-500 text-lg">
      <p>Your cart is empty 😢</p>
      <Link to="/" className="text-pink-600 hover:underline mt-4 block">Go back to products</Link>
    </div>
  )}
</div>

    </>
  );
};

export default Cart;
