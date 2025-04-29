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
      <div className="max-w-7xl mx-auto mt-25 px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        {cartItems.length > 0 ? (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-4">
                  <Link to={`/`}>
                    <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
                  </Link>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-500 line-through">₹{getOriginalPrice(item)}</p>
                      <p className="text-pink-600 font-bold">₹{item.price}</p>
                      <p className="text-green-500 text-sm">
                        ({Math.round(((getOriginalPrice(item) - item.price) / getOriginalPrice(item)) * 100)}% OFF)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="px-3 py-1 bg-gray-300 text-black rounded-lg"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="px-3 py-1 bg-gray-300 text-black rounded-lg"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Totals Section */}
            <div className="flex flex-col gap-4 mt-8 text-lg font-semibold">
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

              <hr />

              <div className="flex justify-between text-xl font-bold">
                <span>Final Amount:</span>
                <span>₹{getFinalAmount().toFixed(2)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-8">
              <Link to="/" className="px-6 py-2 bg-gray-200 text-black rounded-full">Continue Shopping</Link>
              <Link to="/checkout" className="px-6 py-2 bg-pink-600 text-white rounded-full">Checkout</Link>
            </div>

          </div>
        ) : (
          <p>Your cart is empty. Start adding products!</p>
        )}
      </div>
    </>
  );
};

export default Cart;
