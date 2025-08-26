import React, { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import SmallNavbar from "../../components/SmallNavbar";

const MyOrders = () => {
  const [orders] = useState([
    {
      id: "CR25060214520411213740104",
      product: "Alastar Women Gown Red Knee Length Dress",
      color: "Red",
      size: "S",
      price: 257,
      coins: 26,
      image: "https://picsum.photos/100?random=1",
      status: "Refund completed",
      refundDetails: [
        "Refund was added to your UPI linked bank account on Jun 03 02:52 PM. If you can’t see the refund in your bank statement, contact your bank with reference number 100676193810.",
        "The refund was added to your SuperCoins balance on Jun 03 02:52 PM.",
      ],
    },
    {
      id: "CR2506021453012037333205",
      product: "LooksFootwear Women Heels",
      color: "White",
      size: "8",
      price: 391,
      image: "https://picsum.photos/100?random=2",
      status: "Refund completed",
      refundDetails: [
        "Refund was added to your UPI linked bank account on Jun 03 03:10 PM. If you can’t see the refund in your bank statement, contact your bank with reference number 100676193810.",
      ],
    },
  ]);

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <>
      <SmallNavbar />
      <div className="bg-gray-100 lg:mt-26 min-h-screen p-6 pb-20">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Home / My Account /{" "}
          <span className="font-medium text-gray-700">My Orders</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Filters (Desktop Only) */}
          <div className="hidden md:block bg-white shadow-lg rounded-2xl p-5 md:col-span-1 border border-gray-100">
            <h2 className="font-semibold text-lg text-gray-800 mb-4">
              Filters
            </h2>

            {/* ORDER STATUS */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 text-sm mb-3 uppercase tracking-wide">
                Order Status
              </h3>
              <div className="space-y-2">
                {["On the way", "Delivered", "Cancelled", "Returned"].map(
                  (status) => (
                    <label
                      key={status}
                      htmlFor={status}
                      className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition"
                    >
                      <input
                        type="checkbox"
                        id={status}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{status}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* ORDER TIME */}
            <div>
              <h3 className="font-medium text-gray-700 text-sm mb-3 uppercase tracking-wide">
                Order Time
              </h3>
              <div className="space-y-2">
                {["Last 30 days", "2024", "2023", "2022", "2021", "Older"].map(
                  (time) => (
                    <label
                      key={time}
                      htmlFor={time}
                      className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition"
                    >
                      <input
                        type="checkbox"
                        id={time}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{time}</span>
                    </label>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Orders Section */}
          <div className="md:col-span-3">
            {/* Search Bar */}
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Search your orders here"
                className="flex-1 shadow bg-white rounded-l px-3 py-2 focus:outline-none"
              />
              <button className="bg-yellow-400 text-white px-4 rounded-r flex items-center">
                <Search size={18} className="mr-1" /> Search Orders
              </button>
            </div>

            {/* Orders List */}
            <div className="space-y-4">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="bg-white shadow rounded-lg p-4 flex gap-4"
                >
                  {/* Product Image */}
                  <img
                    src={order.image}
                    alt={order.product}
                    className="w-24 h-24 object-cover rounded"
                  />

                  {/* Product Info */}
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-800">
                      {order.product}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Color: {order.color}, Size: {order.size}
                    </p>
                    <p className="font-medium mt-1">
                      ₹{order.price}{" "}
                      {order.coins && (
                        <span className="text-yellow-600">
                          + ⚡ {order.coins}
                        </span>
                      )}
                    </p>
                    <p className="text-red-500 text-sm font-semibold">
                      {order.status}
                    </p>

                    {/* Refund Details */}
                    <div className="mt-2 space-y-2">
                      {order.refundDetails.map((detail, i) => (
                        <p
                          key={i}
                          className="text-sm text-gray-600 border-l-4 border-green-500 pl-2"
                        >
                          <span className="text-green-600 font-medium">
                            Refund Completed
                          </span>{" "}
                          - {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Filters Button */}
        <div className="md:hidden w-full text-center">
          <button
            className="md:hidden w-full fixed bottom-0 left-1/2 -translate-x-1/2 
               bg-gradient-to-r from-[#2c85c5] to-[#f9ff8b] 
               text-white font-medium px-6 py-3
               shadow-lg flex items-center justify-center gap-2"
            onClick={() => setShowMobileFilters(true)}
          >
            <SlidersHorizontal size={18} /> Filters
          </button>
        </div>


        {/* Mobile Filters Drawer */}
        {showMobileFilters && (
          <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-end z-50">
            <div className="bg-white w-full rounded-t-2xl p-5 max-h-[80vh] overflow-y-auto animate-slide-up">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg text-gray-800">
                  Filters
                </h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>

              {/* ORDER STATUS */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 text-sm mb-3 uppercase tracking-wide">
                  Order Status
                </h3>
                <div className="space-y-2">
                  {["On the way", "Delivered", "Cancelled", "Returned"].map(
                    (status) => (
                      <label
                        key={status}
                        htmlFor={`m-${status}`}
                        className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition"
                      >
                        <input
                          type="checkbox"
                          id={`m-${status}`}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                        />
                        <span className="text-sm text-gray-700">{status}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* ORDER TIME */}
              <div>
                <h3 className="font-medium text-gray-700 text-sm mb-3 uppercase tracking-wide">
                  Order Time
                </h3>
                <div className="space-y-2">
                  {[
                    "Last 30 days",
                    "2024",
                    "2023",
                    "2022",
                    "2021",
                    "Older",
                  ].map((time) => (
                    <label
                      key={time}
                      htmlFor={`m-${time}`}
                      className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition"
                    >
                      <input
                        type="checkbox"
                        id={`m-${time}`}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{time}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animation for smooth slide-up */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default MyOrders;
