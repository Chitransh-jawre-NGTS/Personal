import React, { useState } from "react";

const RentalCheckout = () => {
  const product = {
    _id: "12345ABC",
    name: "Canon EOS R50 Camera",
    description:
      "High-quality mirrorless camera with interchangeable lens support, 4K recording, and lightweight design.",
    image: "https://picsum.photos/600/400",
    price: 1500,
    duration: "per day",
  };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Calculate total price
  const calculateTotal = () => {
    if (!form.startDate || !form.endDate) return 0;
    const start = new Date(form.startDate);
    const end = new Date(form.endDate);
    const days = (end - start) / (1000 * 3600 * 24) + 1;
    return days > 0 ? days * product.price : 0;
  };

  const handleBooking = () => {
    alert("Rental booking confirmed (Static)!");
  };

  return (
    <div className="max-w-6xl mx-auto mt-28 px-6">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
        Rental Checkout
      </h2>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left - Form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-2xl space-y-5">
          <h3 className="text-xl font-semibold mb-5">Customer Details</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <textarea
            name="address"
            placeholder="Delivery Address"
            value={form.address}
            onChange={handleChange}
            rows="3"
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <button
            onClick={handleBooking}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition"
          >
            Confirm Booking
          </button>
        </div>

        {/* Right - Summary */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-inner space-y-5 h-fit">
          <h3 className="text-xl font-semibold mb-3">Rental Summary</h3>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-52 object-cover rounded-lg shadow"
          />
          <div>
            <h4 className="text-lg font-semibold mt-4">{product.name}</h4>
            <p className="text-gray-600 text-sm mt-1">{product.description}</p>
            <p className="text-gray-500 text-sm mt-1">Product ID: {product._id}</p>
            <p className="text-lg font-bold text-green-600 mt-3">
              ₹{product.price} <span className="text-sm text-gray-500">/day</span>
            </p>
          </div>
          <div className="border-t pt-4">
            <p className="text-gray-700">
              Rental Duration:{" "}
              <span className="font-semibold">
                {form.startDate && form.endDate
                  ? `${form.startDate} → ${form.endDate}`
                  : "Select dates"}
              </span>
            </p>
            <p className="text-2xl font-bold text-blue-600 mt-3">
              Total: ₹{calculateTotal()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalCheckout;
