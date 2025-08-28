import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import SmallNavbar from "../../../components/SmallNavbar";
import { CheckCircle, MapPin, Package, CreditCard } from "lucide-react";

const CheckoutPage = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [orderStep, setOrderStep] = useState(1); // 1 = address, 2 = summary
  const navigate = useNavigate();

  const addresses = [
    {
      name: "Chitransh Jawre",
      phone: "7879746796",
      type: "HOME",
      address:
        "Mr 9 square, c21 mall, panday ji paratha center vali gali ke andar aana h or khatu shyam mandir me aake contact kriye, Indore, Madhya Pradesh - 452010",
    },
    {
      name: "Manoj Shiv",
      phone: "9424949294",
      type: "WORK",
      address:
        "MS Digitals CSC 289 Shiv Sadan behind railway station, Triloki Nagar, Chhindwara, Madhya Pradesh - 480001",
    },
    {
      name: "N S Jawre",
      phone: "7879746796",
      type: "HOME",
      address:
        "Near Housing Board Colony, Vimla Nagar In Front of Rajshree Palace, SEONI, Madhya Pradesh - 480661",
    },
  ];

  const product = {
    id: 1,
    name: "Wireless Headphones",
    price: 1399,
    image: "https://via.placeholder.com/120x120.png?text=Product",
    qty: 1,
    seller: "RetailNet",
  };

  return (
    <>
      <SmallNavbar showBottomNav={false} showCart={false} showSearch={false} />
      <div className="bg-gray-50 min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="md:col-span-2 space-y-6">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-4">
              {[
                { id: 1, label: "Login", icon: <CheckCircle size={18} /> },
                { id: 2, label: "Address", icon: <MapPin size={18} /> },
                { id: 3, label: "Summary", icon: <Package size={18} /> },
              ].map((step) => (
                <div
                  key={step.id}
                  className={`flex flex-col items-center w-full ${
                    orderStep >= step.id ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                      orderStep >= step.id
                        ? "border-blue-600 bg-blue-100"
                        : "border-gray-300"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <p className="text-xs mt-1">{step.label}</p>
                </div>
              ))}
            </div>

            {/* Step 1 - Login */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center border-b pb-2 mb-2">
                <h2 className="font-semibold text-lg">1 LOGIN</h2>
                <button className="text-blue-600 text-sm hover:underline">
                  CHANGE
                </button>
              </div>
              <p className="font-medium">Mr. Chitransh Jawre +91 7879746796</p>
            </div>

            {/* Step 2 - Delivery Address */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center border-b pb-2 mb-2">
                <h2 className="font-semibold text-lg">2 DELIVERY ADDRESS</h2>
                <button className="text-blue-600 text-sm hover:underline">
                  EDIT
                </button>
              </div>
              <div className="space-y-4">
                {addresses.map((addr, i) => (
                  <div
                    key={i}
                    className={`border rounded-lg p-3 transition ${
                      selectedAddress === i
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:shadow"
                    }`}
                  >
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="address"
                        checked={selectedAddress === i}
                        onChange={() => setSelectedAddress(i)}
                        className="mt-1 accent-blue-600"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{addr.name}</span>
                          <span className="text-xs px-2 py-0.5 border rounded bg-gray-100">
                            {addr.type}
                          </span>
                          <span className="text-gray-600">{addr.phone}</span>
                        </div>
                        <p className="text-gray-700 text-sm">{addr.address}</p>
                      </div>
                    </label>
                    {selectedAddress === i && orderStep === 1 && (
                      <button
                        onClick={() => setOrderStep(2)}
                        className="mt-3 w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                      >
                        DELIVER HERE
                      </button>
                    )}
                  </div>
                ))}
                <button className="text-blue-600 text-sm font-medium hover:underline">
                  + Add a new address
                </button>
              </div>
            </div>

            {/* Step 3 - Order Summary */}
            {orderStep >= 2 && (
              <div className="bg-white rounded-lg shadow-md p-4 animate-fadeIn">
                <h2 className="font-semibold text-lg border-b pb-2 mb-4">
                  3 ORDER SUMMARY
                </h2>
                <div className="flex gap-4 items-start mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded border"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-500">
                      Seller: {product.seller}
                    </p>
                    <p className="font-semibold mt-1">₹{product.price}</p>
                    <p className="text-sm text-gray-600">Qty: {product.qty}</p>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/payment")} // redirect to PaymentPage
                  className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
                >
                  CONTINUE TO PAYMENT
                </button>
              </div>
            )}
          </div>

          {/* Right Section - Price Details */}
          <div className="bg-white rounded-lg shadow-md p-4 h-fit sticky top-24">
            <h2 className="font-semibold text-gray-700 border-b pb-2 mb-4">
              PRICE DETAILS
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Price (1 item)</span>
                <span>₹{product.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Protect Promise Fee</span>
                <span>₹19</span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Payable</span>
                <span>₹{product.price + 19}</span>
              </div>
              <p className="text-green-600 text-sm">
                Your Total Savings on this order ₹3,572
              </p>
            </div>
            <div className="mt-4 text-xs text-gray-600 space-y-2">
              <p>✅ Safe and Secure Payments. Easy returns. 100% Authentic products.</p>
              <p>
                By continuing with the order, you confirm that you are above 18
                years of age, and you agree to Flipkart's Terms of Use and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
