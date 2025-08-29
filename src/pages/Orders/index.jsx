import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import SmallNavbar from "../../components/SmallNavbar";
import AmazonStyleNavbar from "../../components/Navbar";

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
        "Refund was added to your UPI linked bank account on Jun 03 02:52 PM. If you can’t see it, contact your bank with reference number 100676193810.",
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
        "Refund was added to your UPI linked bank account on Jun 03 03:10 PM. Contact your bank if not visible.",
      ],
    },
  ]);

  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      {/* <AmazonStyleNavbar /> */}
      <SmallNavbar logoText="My Orders" showSearch={false} />

      <div className="bg-gray-100 lg:mt-26 min-h-screen md:p-6 pb-20">
        {/* Breadcrumb */}
        <div className="text-sm hidden lg:flex text-gray-500 py-4 px-3 md:px-0">
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
            <div className="flex mb-4 mt-2 px-3 md:px-0">
              <input
                type="text"
                placeholder="Search your orders..."
                className="flex-1 shadow bg-white rounded-l-full px-4 py-2 text-sm focus:outline-none"
              />
              <button
                aria-label="Search orders"
                className="bg-yellow-400 px-5 rounded-r-full flex items-center justify-center"
              >
                <Search size={18} />
              </button>
            </div>

            {/* Orders List */}
            <div className="space-y-4 px-3 md:px-0">
              {orders.map((order, index) => (
                <Link to={"/order-details"}><div
                  key={index}
                  className="bg-white shadow rounded-xl p-4 flex flex-col md:flex-row gap-4 hover:shadow-lg transition"
                >
                  {/* Product Image */}
                  <img
                    src={order.image}
                    alt={order.product}
                    className="w-full md:w-24 h-40 md:h-24 object-cover rounded-lg"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-800 text-sm md:text-base">
                      {order.product}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                      Color: {order.color}, Size: {order.size}
                    </p>
                    <p className="font-medium mt-1 text-sm md:text-base">
                      ₹{order.price}{" "}
                      {order.coins && (
                        <span className="text-yellow-600 ml-1 text-xs">
                          + ⚡ {order.coins}
                        </span>
                      )}
                    </p>

                    {/* Status */}
                    <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                      {order.status}
                    </span>

                    {/* Refund Details (collapsible on mobile) */}
                    <div className="mt-3">
                      <button
                        className="flex items-center gap-1 text-xs text-blue-600"
                        onClick={() =>
                          setExpanded(expanded === index ? null : index)
                        }
                      >
                        {expanded === index ? "Hide Details" : "View Refund Details"}{" "}
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${
                            expanded === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expanded === index && (
                        <div className="mt-2 space-y-2">
                          {order.refundDetails.map((detail, i) => (
                            <p
                              key={i}
                              className="text-xs md:text-sm text-gray-600 border-l-4 border-green-500 pl-2"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div></Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Filters Floating Button */}
        <button
          className="md:hidden fixed bottom-20 right-5 bg-gradient-to-r from-[#2c85c5] to-[#f9ff8b] 
          text-white p-4 rounded-full shadow-lg"
          onClick={() => setShowMobileFilters(true)}
        >
          <SlidersHorizontal size={20} />
        </button>

        {/* Mobile Filters Drawer */}
        {showMobileFilters && (
          <div
            className="fixed inset-0 backdrop-blur-sm bg-black/40 flex justify-center items-end z-50"
            onClick={() => setShowMobileFilters(false)}
          >
            <div
              className="bg-white w-full rounded-t-2xl p-5 max-h-[80vh] overflow-y-auto animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
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
