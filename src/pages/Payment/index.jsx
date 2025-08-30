import React, { useState } from "react";
import SmallNavbar from "../../components/SmallNavbar";
import AmazonStyleNavbar from "../../components/Navbar";

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  const priceDetails = {
    price: 1399,
    protectFee: 19,
  };

  const total = priceDetails.price + priceDetails.protectFee;

  const paymentOptions = [
    { id: "upi", label: "UPI", desc: "Pay by any UPI app" },
    {
      id: "card",
      label: "Credit / Debit / ATM Card",
      desc: "Add and secure cards as per RBI guidelines",
      offers: "Get upto ₹4,000 cashback • 2 offers available",
    },
    { id: "emi", label: "EMI", desc: "Get Debit and Cardless EMIs on HDFC Bank" },
    { id: "netbanking", label: "Net Banking", desc: "Pay directly via your bank" },
    {
      id: "cod",
      label: "Cash on Delivery",
      desc: "Pay ₹25 as advance and balance amount as Cash on delivery",
    },
    { id: "gift", label: "Have a Flipkart Gift Card?", desc: "" },
  ];

  return (
   <>
   {/* <AmazonStyleNavbar/> */}
   <SmallNavbar showBottomNav={false} showCart={false} showSearch={false} />
    <div className="bg-gradient-to-br from-blue-50 to-yellow-50 min-h-screen lg:mt-26 md:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section - Payment Options */}
        <div className="md:col-span-2 bg-white  shadow-md flex flex-col md:flex-row overflow-hidden border border-gray-100">
          {/* Options List */}
          <div className="w-full md:w-1/3 border-r bg-gradient-to-b from-gray-50 to-white">
            <h2 className="p-4 font-bold text-gray-700 border-b">Complete Payment</h2>
            <div className="divide-y">
              {paymentOptions.map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setSelectedMethod(opt.id)}
                  className={`p-4 cursor-pointer transition rounded-sm ${
                    selectedMethod === opt.id
                      ? "bg-blue-100 border-l-4 border-blue-600"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <p className="font-medium text-gray-700">{opt.label}</p>
                  <p className="text-xs text-gray-500">{opt.desc}</p>
                  {opt.offers && (
                    <p className="text-green-600 text-xs mt-1 font-medium">
                      {opt.offers}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Payment Details */}
          <div className="flex-1 p-6">
            {selectedMethod === "upi" && (
              <div>
                <h3 className="font-semibold text-lg text-gray-700 mb-3">Pay via UPI</h3>
                <input
                  type="text"
                  placeholder="Enter UPI ID"
                  className="border p-3 rounded-lg w-full mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 py-3 rounded-xl font-semibold shadow hover:shadow-lg transition">
                  Pay ₹{total}
                </button>
              </div>
            )}

            {selectedMethod === "card" && (
              <div>
                <h3 className="font-semibold text-lg text-gray-700 mb-3">Saved Card</h3>
                <div className="border p-3 rounded-lg mb-4 flex justify-between items-center hover:shadow-md transition">
                  <div>
                    <p className="text-gray-700">Credit Card • 8966</p>
                    <p className="text-xs text-gray-500">
                      CVV is not required for this secured card
                    </p>
                  </div>
                  <input type="radio" checked readOnly />
                </div>
                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 py-3 rounded-xl font-semibold shadow hover:shadow-lg transition">
                  Pay ₹{total}
                </button>
              </div>
            )}

            {selectedMethod === "emi" && (
              <div>
                <h3 className="font-semibold text-lg text-gray-700 mb-3">Pay using EMI</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Select from debit and cardless EMIs on HDFC Bank.
                </p>
                <button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3 rounded-xl font-semibold shadow hover:shadow-lg transition">
                  Continue to EMI Options
                </button>
              </div>
            )}

            {selectedMethod === "netbanking" && (
              <div>
                <h3 className="font-semibold text-lg text-gray-700 mb-3">Net Banking</h3>
                <select className="border p-3 rounded-lg w-full mb-4 focus:ring-2 focus:ring-blue-400 outline-none">
                  <option>Select Bank</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>SBI</option>
                </select>
                <button className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white py-3 rounded-xl font-semibold shadow hover:shadow-lg transition">
                  Pay ₹{total}
                </button>
              </div>
            )}

            {selectedMethod === "cod" && (
              <div>
                <h3 className="font-semibold text-lg text-gray-700 mb-3">Cash on Delivery</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Pay ₹25 as advance and balance on delivery.
                </p>
                <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-xl font-semibold shadow hover:shadow-lg transition">
                  Confirm COD
                </button>
              </div>
            )}

            {selectedMethod === "gift" && (
              <div>
                <h3 className="font-semibold text-lg text-gray-700 mb-3">Redeem Gift Card</h3>
                <input
                  type="text"
                  placeholder="Enter Gift Card Code"
                  className="border p-3 rounded-lg w-full mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <button className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-3 rounded-xl font-semibold shadow hover:shadow-lg transition">
                  Apply Gift Card
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Price Details */}
        <div className="bg-white rounded-2xl shadow-md p-6 h-fit border border-gray-100">
          <h2 className="font-bold text-gray-700 border-b pb-2 mb-4">
            PRICE DETAILS
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Price (1 item)</span>
              <span className="font-medium">₹{priceDetails.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Protect Promise Fee</span>
              <span className="font-medium">₹{priceDetails.protectFee}</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg text-gray-800">
              <span>Total Amount</span>
              <span>₹{total}</span>
            </div>
            <div className="bg-green-50 text-green-600 text-sm p-3 rounded-lg border border-green-200">
              🎉 ₹25 Off — Claim now with payment offers
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PaymentPage;
