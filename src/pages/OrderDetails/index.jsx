import React from "react";
import { Home, User, PackageCheck, XCircle } from "lucide-react";
import SmallNavbar from "../../components/SmallNavbar";
import AmazonStyleNavbar from "../../components/Navbar";

const OrderDetails = () => {
  return (
    <>
    {/* <AmazonStyleNavbar/> */}
      <SmallNavbar showBottomNav={false } showCart={false} showSearch={false} logoText="Order detials"  />
      <div className="bg-gray-50 min-h-screen pb-20 p-3 sm:px-20 lg:mt-30">
        {/* Breadcrumb */}
        <nav className="text-xs hidden lg:flex sm:text-sm text-gray-500 mb-3">
          Home / My Account / My Orders /{" "}
          <span className="text-gray-800 font-medium">
            OD334552850752398100
          </span>
        </nav>

        {/* Refund Info */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
            Total refund -{" "}
            <span className="text-green-600">₹257 + 26🪙</span>
          </h2>

          <div className="space-y-3">
            {[
              {
                amount: "₹257",
                desc: "Refund was added to your UPI linked bank account on Jun 03 02:52 PM.",
                link: "How do I check my bank account?",
              },
              {
                amount: "₹26",
                desc: "The refund was added to your SuperCoins balance on Jun 03 02:52 PM.",
                link: "Check Balance & Validity",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-between border rounded-lg p-3 bg-gray-50"
              >
                <div>
                  <p className="font-medium">{item.amount}</p>
                  <p className="text-xs text-gray-500 mb-1">{item.desc}</p>
                  <a
                    href="#"
                    className="text-xs text-blue-600 font-medium underline"
                  >
                    {item.link}
                  </a>
                </div>
                <span className="text-green-600 text-xs sm:text-sm font-semibold">
                  Completed
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
          <div className="flex gap-3">
            <img
              src="https://rukminim2.flixcart.com/image/832/832/xif0q/dress/z/g/z/s-kd-17-alastar-original-imaghagjywggk8xj.jpeg"
              alt="Product"
              className="w-20 h-24 sm:w-24 sm:h-28 object-cover rounded-lg border"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-sm sm:text-base text-gray-800 line-clamp-2">
                Alastar Women Gown Red Knee Length Dress
              </h3>
              <p className="text-xs text-gray-500">S, Red</p>
              <p className="text-xs text-gray-500">Seller: Alastair</p>
              <p className="font-semibold text-gray-800 mt-1 text-sm">
                ₹257 + 26🪙
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-5 border-t pt-3 space-y-2">
            <div className="flex items-center gap-2 text-green-600 text-xs sm:text-sm">
              <PackageCheck size={16} />
              <p>Order Confirmed, May 31</p>
            </div>
            <div className="flex items-center gap-2 text-red-600 text-xs sm:text-sm">
              <XCircle size={16} />
              <p>Cancelled, Jun 02</p>
            </div>
            <p className="text-xs text-gray-500">
              Your order was cancelled as per your request.
            </p>
          </div>
        </div>

        {/* Delivery Details */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
          <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">
            Delivery details
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <Home size={16} className="mt-1 text-gray-600 shrink-0" />
              <p className="text-gray-700 leading-snug">
                Mr 9 square, c21 mall, panday ji paratha center vali gali...
              </p>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} className="text-gray-600" />
              <p className="text-gray-700">Chitransh Jawre - 7879746796</p>
            </div>
          </div>
        </div>

        {/* Price Details */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">
            Price details
          </h3>
          <div className="text-xs sm:text-sm space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-500">Listing price</p>
              <p className="line-through">₹1,199</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">Selling price</p>
              <p>₹399</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">Extra discount</p>
              <p className="text-green-600">-₹89</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">Special price</p>
              <p className="text-green-600">₹310</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500">Other discount</p>
              <p className="text-green-600">-₹31</p>
            </div>
            <div className="flex justify-between border-t pt-2 font-semibold text-sm">
              <p>Total amount</p>
              <p>₹257 + 26🪙</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
