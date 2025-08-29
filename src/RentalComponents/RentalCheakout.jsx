import React, { useState } from "react";
import AmazonStyleNavbar from "../components/Navbar";
import { Home, MapPin, Phone, Edit, Plus } from "lucide-react";

const RentNowPage = () => {
  const addresses = [
    {
      id: 1,
      name: "Chitransh Jawre",
      type: "Home",
      addressLine: "123 Housing Board Colony, Vimla Nagar",
      city: "Seoni",
      state: "Madhya Pradesh",
      pin: "480661",
      phone: "+91 9876543210",
    },
    {
      id: 2,
      name: "Chitransh Jawre",
      type: "Office",
      addressLine: "Flat 402, Malviya Nagar",
      city: "Indore",
      state: "Madhya Pradesh",
      pin: "452001",
      phone: "+91 9123456780",
    },
  ];

  const product = {
    name: "Wireless Headphones",
    description: "High-quality noise-cancelling headphones.",
    pricePerDay: 500,
    image: "https://via.placeholder.com/300", // Updated bigger image
  };

  const [duration, setDuration] = useState(7);

  const handleDurationChange = (e) => {
    const value = e.target.value;
    let days = 7;
    if (value === "1 Week") days = 7;
    else if (value === "2 Weeks") days = 14;
    else if (value === "1 Month") days = 30;
    else if (value === "3 Months") days = 90;
    setDuration(days);
  };

  const totalAmount = product.pricePerDay * duration;

  return (
    <div className="min-h-screen my-24 bg-gray-50">
      <AmazonStyleNavbar showMobileBottom={false} />

      <div className="max-w-6xl  mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-6">
          {/* Product Details */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-56 h-56 object-cover rounded-xl"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-yellow-500 font-semibold mt-4 text-lg">
                ₹{product.pricePerDay} / day
              </p>
            </div>
          </div>

          {/* Saved Addresses */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
              <MapPin className="w-5 h-5 text-yellow-500" /> Saved Addresses
            </h2>
            <div className="space-y-3">
              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  className="border border-gray-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:shadow-md transition-shadow duration-200"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{addr.name}</p>
                    <p className="text-sm text-gray-500">
                      {addr.type} - {addr.addressLine}, {addr.city}, {addr.state} - {addr.pin}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <Phone className="inline w-4 h-4 mr-1 text-yellow-500" /> {addr.phone}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded-xl text-sm font-medium hover:bg-yellow-600 transition-colors">
                    Deliver Here
                  </button>
                </div>
              ))}
            </div>
            <button className="mt-4 flex items-center gap-2 text-yellow-500 font-medium hover:underline">
              <Plus className="w-5 h-5" /> Add New Address
            </button>
          </div>

          {/* Rental Duration */}
          <div className="bg-white shadow-lg rounded-2xl  p-6">
            <h2 className="text-xl font-bold mb-3 text-gray-800">Rental Duration</h2>
            <select
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={handleDurationChange}
              value={
                duration === 7
                  ? "1 Week"
                  : duration === 14
                  ? "2 Weeks"
                  : duration === 30
                  ? "1 Month"
                  : "3 Months"
              }
            >
              <option>1 Week</option>
              <option>2 Weeks</option>
              <option>1 Month</option>
              <option>3 Months</option>
            </select>
          </div>
        </div>

        {/* Right Section - Summary */}
<div className="bg-white shadow-lg rounded-2xl p-6 sticky top-20 md:block hidden">
  <h2 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>
  <div className="space-y-3 text-gray-700">
    <p className="flex justify-between">
      <span>Product:</span> <span>{product.name}</span>
    </p>
    <p className="flex justify-between">
      <span>Rent per day:</span> <span>₹{product.pricePerDay}</span>
    </p>
    <p className="flex justify-between">
      <span>Duration:</span> <span>{duration} days</span>
    </p>
    <p className="flex justify-between font-semibold text-gray-900 text-lg">
      <span>Total Amount:</span> <span>₹{totalAmount}</span>
    </p>
  </div>
  <button className="mt-6 w-full bg-yellow-500 text-white py-3 rounded-xl font-semibold hover:bg-yellow-600 transition-colors">
    Confirm & Rent Now
  </button>
</div>

{/* Mobile Fixed Bottom Button */}
<div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200 shadow-lg">
  <button className="w-full bg-yellow-500 text-white py-3 rounded-xl font-semibold hover:bg-yellow-600 transition-colors">
    Confirm & Rent Now
  </button>
</div>

      </div>
    </div>
  );
};

export default RentNowPage;
