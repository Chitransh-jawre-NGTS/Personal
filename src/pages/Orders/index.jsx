import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import SmallNavbar from "../../components/SmallNavbar";

const FilterSection = ({ title, options, prefix = "" }) => (
  <div className="mb-6">
    <h3 className="font-medium text-gray-700 text-sm mb-3 uppercase tracking-wide">
      {title}
    </h3>
    <div className="space-y-2">
      {options.map((opt) => (
        <label
          key={opt}
          htmlFor={`${prefix}${opt}`}
          className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition"
        >
          <input
            type="checkbox"
            id={`${prefix}${opt}`}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
          />
          <span className="text-sm text-gray-700">{opt}</span>
        </label>
      ))}
    </div>
  </div>
);

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
      <SmallNavbar logoText="My Orders" showSearch={false} showBottomNav={false} />

      <div className="bg-gray-100 lg:mt-26 min-h-screen md:p-6 pb-20">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 py-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          / My Account /{" "}
          <span className="font-medium text-gray-700">My Orders</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters (Desktop) */}
          <aside className="hidden md:block bg-white shadow-lg rounded-2xl p-5 md:col-span-1 border border-gray-100 h-fit">
            <h2 className="font-semibold text-lg text-gray-800 mb-4">
              Filters
            </h2>
            <FilterSection
              title="Order Status"
              options={["On the way", "Delivered", "Cancelled", "Returned"]}
            />
            <FilterSection
              title="Order Time"
              options={["Last 30 days", "2024", "2023", "2022", "2021", "Older"]}
            />
          </aside>

          {/* Orders */}
          <div className="md:col-span-3">
            {/* Search */}
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Search your orders here"
                className="flex-1 shadow bg-white rounded-l px-3 py-2 focus:outline-none"
              />
              <button
                aria-label="Search orders"
                className="bg-yellow-400 text-white px-4 rounded-r flex items-center"
              >
                <Search size={18} className="mr-1" /> Search
              </button>
            </div>

            {/* Orders List */}
            <div className="space-y-4">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="bg-white shadow rounded-xl p-4 flex gap-4 hover:shadow-lg transition"
                >
                  {/* Product Image */}
                  <img
                    src={order.image}
                    alt={order.product}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  {/* Info */}
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
                        <span className="text-yellow-600">+ ⚡ {order.coins}</span>
                      )}
                    </p>

                    {/* Status */}
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                      {order.status}
                    </span>

                    {/* Refund Details */}
                    <div className="mt-2 space-y-2">
                      {order.refundDetails.map((detail, i) => (
                        <p
                          key={i}
                          className="text-sm text-gray-600 border-l-4 border-green-500 pl-2"
                        >
                          {detail}
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
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full
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
          <div
            className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-end z-50"
            onClick={() => setShowMobileFilters(false)}
          >
            <div
              className="bg-white w-full rounded-t-2xl p-5 max-h-[80vh] overflow-y-auto animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg text-gray-800">Filters</h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="text-gray-600"
                  aria-label="Close filters"
                >
                  <X size={20} />
                </button>
              </div>
              <FilterSection
                title="Order Status"
                options={["On the way", "Delivered", "Cancelled", "Returned"]}
                prefix="m-"
              />
              <FilterSection
                title="Order Time"
                options={["Last 30 days", "2024", "2023", "2022", "2021", "Older"]}
                prefix="m-"
              />
            </div>
          </div>
        )}
      </div>

      {/* Slide animation */}
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
