import React, { useState } from "react";
import { X } from "lucide-react"; // for the cancel (close) button

const TopBar = () => {
  const [showCoupon, setShowCoupon] = useState(false); // toggle coupon visibility

  return (
    <>
      {/* Main Top Bar */}
      <div className="fixed top-0 left-0 w-full bg-[#262626] text-white px-6 py-2 z-50 shadow-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between text-sm sm:text-base">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-500 p-1 rounded">
              <span className="text-sm font-bold text-black">M</span>
            </div>
            <span className="font-semibold tracking-wide">Mantu</span>
          </div>

          {/* Right: Download Button */}
          <a
            href="#"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-1.5 rounded-md transition-all duration-300 text-xs sm:text-sm"
          >
            📲 Download App
          </a>
        </div>
      </div>

      {/* Coupon Banner (below top bar) */}
      {showCoupon && (
        <div className="fixed top-[44px] left-0 w-full bg-yellow-100 text-gray-800 text-sm px-6 py-2 z-40 shadow-sm">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            <span className="text-center w-full sm:w-auto">
              🎁 Welcome Offer: Use code{" "}
              <span className="font-bold mx-1">MANTU10</span> at checkout & get{" "}
              <span className="font-bold mx-1">10% OFF</span> on your first order!
            </span>

            {/* Cancel Button */}
            <button
              onClick={() => setShowCoupon(false)}
              className="ml-4 text-gray-600 hover:text-red-500 transition"
              aria-label="Close Coupon"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TopBar;
